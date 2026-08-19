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
  Car,
  Users,
  Star,
  MessageCircle,
  Check,
} from "lucide-react";

export function FleetPage() {
  const { t } = useLanguage();

  const vehicles = [
    {
      image: "/innova-crysta.webp",
      nameKey: "fleet.innova.name",
      rateKey: "fleet.innova.rate",
      capacityKey: "fleet.innova.capacity",
      featuresKey: "fleet.innova.features",
      idealKey: "fleet.innova.ideal",
    },
    {
      image: "/fleet-cars.webp",
      nameKey: "fleet.ertiga.name",
      rateKey: "fleet.ertiga.rate",
      capacityKey: "fleet.ertiga.capacity",
      featuresKey: "fleet.ertiga.features",
      idealKey: "fleet.ertiga.ideal",
    },
    {
      image: "/fleet-cars.webp",
      nameKey: "fleet.dzire.name",
      rateKey: "fleet.dzire.rate",
      capacityKey: "fleet.dzire.capacity",
      featuresKey: "fleet.dzire.features",
      idealKey: "fleet.dzire.ideal",
    },
    {
      image: "/fleet-cars.webp",
      nameKey: "fleet.wagonr.name",
      rateKey: "fleet.wagonr.rate",
      capacityKey: "fleet.wagonr.capacity",
      featuresKey: "fleet.wagonr.features",
      idealKey: "fleet.wagonr.ideal",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            {t("fleet.section_title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("fleet.section_subtitle")}
          </p>
        </div>
      </section>

      {/* Vehicle Cards Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <Card
                key={index}
                className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all group"
              >
                {/* Vehicle Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={t(vehicle.nameKey as any)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {t(vehicle.rateKey as any)} {t("fleet.per_km")}
                  </Badge>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary" />
                    {t(vehicle.nameKey as any)}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Capacity */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{t(vehicle.capacityKey as any)}</span>
                  </div>

                  {/* Features */}
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t(vehicle.featuresKey as any)}</span>
                  </div>

                  {/* Ideal For */}
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{t(vehicle.idealKey as any)}</span>
                  </div>

                  <Separator />

                  {/* Book Now Button */}
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                  >
                    <a
                      href={getWhatsAppUrl(
                        `Hi! I'd like to book a ${t(vehicle.nameKey as any)}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t("fleet.book_now")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Pricing Comparison Table */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            {t("fleet.pricing_title")}
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-muted-foreground font-medium">
                    {t("fleet.table_vehicle")}
                  </th>
                  <th className="text-left p-4 text-muted-foreground font-medium">
                    {t("fleet.table_rate")}
                  </th>
                  <th className="text-left p-4 text-muted-foreground font-medium">
                    {t("fleet.table_capacity")}
                  </th>
                  <th className="text-left p-4 text-muted-foreground font-medium">
                    {t("fleet.table_ideal")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                  >
                    <td className="p-4 font-medium text-foreground">
                      {t(vehicle.nameKey as any)}
                    </td>
                    <td className="p-4 text-primary font-semibold">
                      {t(vehicle.rateKey as any)} {t("fleet.per_km")}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {t(vehicle.capacityKey as any)}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {t(vehicle.idealKey as any)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("fleet.cta_title")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t("fleet.cta_desc")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white gap-2"
          >
            <a
              href={getWhatsAppUrl(
                "Hello! I'd like to inquire about your fleet and rates."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              {t("fleet.cta_button")}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
