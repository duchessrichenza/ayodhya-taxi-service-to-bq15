import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { translations, type Language, type TranslationKey } from './translations';

const STORAGE_KEY = 'jsr-language';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

/**
 * Resolve a dot-notation key against a nested translations object.
 *
 * Example: resolve('fleet.innova.name', translations.en)
 *          → translations.en.fleet.innova.name
 */
function resolve(key: string, obj: Record<string, unknown>): string {
  const parts = key.split('.');
  let current: unknown = obj;

  for (const part of parts) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return key; // fallback: return the key itself
    }
    current = (current as Record<string, unknown>)[part];
  }

  if (typeof current === 'string') {
    return current;
  }

  // If it resolved to something other than a string (e.g. a sub-object),
  // return the key as a fallback so it's visible during development.
  return key;
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'hi' || stored === 'en') return stored;
  } catch {
    // localStorage may be unavailable (e.g. private browsing)
  }

  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // silently ignore
    }
    // Update the html lang attribute for accessibility / SEO
    document.documentElement.lang = lang;
  }, []);

  // Set the initial html lang attribute on mount
  useEffect(() => {
    document.documentElement.lang = language;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const t = useCallback(
    (key: string): string => {
      // Try the current language first, fall back to English
      const result = resolve(key, translations[language] as unknown as Record<string, unknown>);
      if (result !== key) return result;

      // Fallback to English if the key wasn't found in the current language
      return resolve(key, translations.en as unknown as Record<string, unknown>);
    },
    [language]
  );

  const value: LanguageContextValue = React.useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

/**
 * Hook to access the current language, switch languages, and translate keys.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { language, setLanguage, t } = useLanguage();
 *
 *   return (
 *     <div>
 *       <h1>{t('hero.title')}</h1>
 *       <button onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}>
 *         {t('common.language')}
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguage must be used within a <LanguageProvider>. ' +
        'Wrap your app with <LanguageProvider> in your root component.'
    );
  }
  return context;
}

export type { Language, TranslationKey };
