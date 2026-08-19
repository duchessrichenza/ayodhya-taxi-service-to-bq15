import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Clock,
  Route,
  Plane,
  Calendar,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export function ToursPage() {
  const { t } = useLanguage();

  const outstationRoutes = [
    {
      nameKey: "tours.prayagraj.name",
      descKey: "tours.prayagraj.desc",
      distanceKey: "tours.prayagraj.distance",
      timeKey: "tours.prayagraj.time",
      image: "/prayagraj.webp",
    },
    {
      nameKey: "tours.lucknow.name",
      descKey: "tours.lucknow.desc",
      distanceKey: "tours.lucknow.distance",
      timeKey: "tours.lucknow.time",
      image: null,
    },
    {
      nameKey: "tours.varanasi.name",
      descKey: "tours.varanasi.desc",
      distanceKey: "tours.varanasi.distance",
      timeKey: "tours.varanasi.time",
      image: "/ganga-aarti.webp",
    },
    {
      nameKey: "tours.agra_mathura.name",
      descKey: "tours.agra_mathura.desc",
      distanceKey: "tours.agra_mathura.distance",
      timeKey: "tours.agra_mathura.time",
      image: null,
    },
  ];

  const airports = [
    {
      name: t("tours.airport_lucknow"),
      message: "Hi! I need an airport transfer to/from Lucknow Airport.",
    },
    {
      name: t("tours.airport_varanasi"),
      message: "Hi! I need an airport transfer to/from Varanasi Airport.",
    },
    {
      name: t("tours.airport_ayodhya"),
      message: "Hi! I need an airport transfer to/from Ayodhya Airport.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            {t("tours.section_title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("tours.section_subtitle")}
          </p>
        </div>
      </section>

      {/* Outstation Route Cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {t("tours.outstation_title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {outstationRoutes.map((route, index) => (
              <Card
                key={index}
                className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all group"
              >
                {/* Route Image */}
                {route.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={route.image}
                      alt={t(route.nameKey as any)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                      {t(route.nameKey as any)}
                    </h3>
                  </div>
                )}

                {!route.image && (
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t(route.nameKey as any)}
                      </CardTitle>
                    </div>
                  </CardHeader>
                )}

                <CardContent className={`space-y-4 ${route.image ? "pt-4" : ""}`}>
                  {route.image && (
                    <div className="sr-only">{t(route.nameKey as any)}</div>
                  )}

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(route.descKey as any)}
                  </p>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Route className="w-4 h-4 text-primary" />
                      <span>{t(route.distanceKey as any)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{t(route.timeKey as any)}</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                  >
                    <a
                      href={getWhatsAppUrl(
                        `Hi! I'd like to book a tour to ${t(route.nameKey as any)}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t("tours.book_tour")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Airport Transfers Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {t("tours.airport_title")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("tours.airport_desc")}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {airports.map((airport, index) => (
              <Card
                key={index}
                className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all text-center"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {airport.name}
                  </h3>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 border-primary/30 hover:bg-primary/10"
                  >
                    <a
                      href={getWhatsAppUrl(airport.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t("tours.book_transfer")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Multi-day Tour Packages */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("tours.multiday_title")}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("tours.multiday_desc")}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="px-3 py-1">
                {t("tours.multiday_tag_1")}
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                {t("tours.multiday_tag_2")}
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                {t("tours.multiday_tag_3")}
              </Badge>
            </div>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white gap-2"
            >
              <a
                href={getWhatsAppUrl(
                  "Hello! I'm interested in a multi-day tour package."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                {t("tours.multiday_enquire")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* CTA at Bottom */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("tours.cta_title")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t("tours.cta_desc")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white gap-2"
            >
              <a
                href={getWhatsAppUrl(
                  "Hello! I'd like to plan a tour. Please help me with options."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                {t("tours.cta_whatsapp")}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/fleet">
                {t("tours.cta_fleet")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
