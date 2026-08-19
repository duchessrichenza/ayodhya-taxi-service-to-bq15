import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { useLanguage } from "@/lib/i18n"

export function WhatsAppFab() {
  const { t } = useLanguage()

  return (
    <a
      href={getWhatsAppUrl(t("common.whatsapp_default_message"))}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 active:scale-95 md:bottom-6"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" />
    </a>
  )
}
