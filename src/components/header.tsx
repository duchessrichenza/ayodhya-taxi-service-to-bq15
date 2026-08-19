import { Link, useLocation } from "react-router-dom"
import { useLanguage } from "@/lib/i18n"
import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { key: "nav.home" as const, path: "/" },
  { key: "nav.about" as const, path: "/about" },
  { key: "nav.services" as const, path: "/services" },
  { key: "nav.fleet" as const, path: "/fleet" },
  { key: "nav.tours" as const, path: "/tours" },
  { key: "nav.ayodhya" as const, path: "/ayodhya" },
  { key: "nav.varanasi" as const, path: "/varanasi" },
  { key: "nav.gallery" as const, path: "/gallery" },
  { key: "nav.contact" as const, path: "/contact" },
]

export function Header() {
  const { t, language, setLanguage } = useLanguage()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.webp" alt="Logo" className="h-10 w-10" />
          <span className="text-sm font-bold text-primary sm:text-lg">
            {t("hero.title")}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
                pathname === link.path ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="gap-1.5 text-muted-foreground hover:text-primary"
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-semibold">{language === "en" ? "हिं" : "EN"}</span>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <SheetTitle className="text-primary">{t("hero.title")}</SheetTitle>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 ${
                      pathname === link.path ? "bg-primary/10 text-primary" : "text-foreground"
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
