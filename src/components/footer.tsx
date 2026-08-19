import { Link } from "react-router-dom"
import { useLanguage } from "@/lib/i18n"
import { MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="hidden border-t border-border/50 bg-card md:block">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src="/logo.webp" alt="Logo" className="h-10 w-10" />
              <span className="text-lg font-bold text-primary">{t("hero.title")}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("hero.subtitle")}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {t("footer.quick_links")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">{t("nav.about")}</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">{t("nav.services")}</Link>
              <Link to="/fleet" className="text-sm text-muted-foreground hover:text-primary">{t("nav.fleet")}</Link>
              <Link to="/tours" className="text-sm text-muted-foreground hover:text-primary">{t("nav.tours")}</Link>
              <Link to="/ayodhya" className="text-sm text-muted-foreground hover:text-primary">{t("nav.ayodhya")}</Link>
              <Link to="/varanasi" className="text-sm text-muted-foreground hover:text-primary">{t("nav.varanasi")}</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {t("footer.contact_info")}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{t("contact.address")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+919628697744" className="hover:text-primary">+91 96286 97744</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>{t("contact.hours")}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {t("footer.our_services")}
            </h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>{t("services.local_title")}</span>
              <span>{t("services.wedding_title")}</span>
              <span>{t("services.airport_title")}</span>
              <span>{t("services.religious_title")}</span>
              <span>{t("services.outstation_title")}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
