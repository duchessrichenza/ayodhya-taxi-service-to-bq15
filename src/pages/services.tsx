import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import {
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Heart,
  Plane,
  BookOpen,
  Navigation,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: MapPin,
      titleKey: "services.local_title",
      descKey: "services.local_desc",
      image: "/hero-ram-mandir.webp",
      message: "Hi! I need a cab for local sightseeing in Ayodhya.",
    },
    {
      icon: Heart,
      titleKey: "services.wedding_title",
      descKey: "services.wedding_desc",
      image: "/wedding-car.webp",
      message: "Hello! I'm looking for wedding car rental services.",
    },
    {
      icon: Plane,
      titleKey: "services.airport_title",
      descKey: "services.airport_desc",
      image: "/fleet-cars.webp",
      message: "Hi! I need an airport transfer service.",
    },
    {
      icon: BookOpen,
      titleKey: "services.religious_title",
      descKey: "services.religious_desc",
      image: "/ganga-aarti.webp",
      message: "Hello! I'd like to book a religious tour package.",
    },
    {
      icon: Navigation,
      titleKey: "services.outstation_title",
      descKey: "services.outstation_desc",
      image: "/prayagraj.webp",
      message: "Hi! I need a cab for an outstation trip.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            {t("services.section_title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.section_subtitle")}
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 space-y-12 max-w-5xl">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all"
            >
              <div
                className={`grid md:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-64 md:h-auto md:min-h-[300px]">
                  <img
                    src={service.image}
                    alt={t(service.titleKey as any)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
                </div>

                {/* Content */}
                <div
                  className={`p-6 md:p-8 flex flex-col justify-center space-y-4 ${
                    index % 2 === 1 ? "md:[direction:ltr]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Popular
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    {t(service.titleKey as any)}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {t(service.descKey as any)}
                  </p>

                  <div className="pt-2">
                    <Button
                      asChild
                      className="bg-green-600 hover:bg-green-700 text-white gap-2"
                    >
                      <a
                        href={getWhatsAppUrl(service.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        {t("common.enquire")}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Bottom CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("services.cta_title")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t("services.cta_desc")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white gap-2"
            >
              <a
                href={getWhatsAppUrl(
                  "Hello! I'd like to know more about your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                {t("services.cta_whatsapp")}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/fleet">{t("services.cta_fleet")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
