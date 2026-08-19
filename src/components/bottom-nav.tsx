import { Link, useLocation } from "react-router-dom"
import { Home, Car, MapPin, Image, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const navItems = [
  { key: "nav.home" as const, path: "/", icon: Home },
  { key: "nav.services" as const, path: "/services", icon: Car },
  { key: "nav.ayodhya" as const, path: "/ayodhya", icon: MapPin },
  { key: "nav.gallery" as const, path: "/gallery", icon: Image },
  { key: "nav.contact" as const, path: "/contact", icon: Phone },
]

export function BottomNav() {
  const { t } = useLanguage()
  const { pathname } = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/95 backdrop-blur-lg md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 text-xs transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
              <span className="truncate">{t(item.key)}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
