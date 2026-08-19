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
  Shield,
  Heart,
  Sofa,
  Award,
  MessageCircle,
} from "lucide-react";

export function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t("about.value_safety"),
      desc: t("about.value_safety_desc"),
    },
    {
      icon: Heart,
      title: t("about.value_honesty"),
      desc: t("about.value_honesty_desc"),
    },
    {
      icon: Sofa,
      title: t("about.value_comfort"),
      desc: t("about.value_comfort_desc"),
    },
    {
      icon: Award,
      title: t("about.value_reliability"),
      desc: t("about.value_reliability_desc"),
    },
  ];

  const stats = [
    { value: "5000+", label: t("about.stat_customers") },
    { value: "15000+", label: t("about.stat_trips") },
    { value: "10+", label: t("about.stat_years") },
    { value: "15+", label: t("about.stat_vehicles") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            {t("about.section_title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("about.section_subtitle")}
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
            {t("about.description")}
          </p>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Owner Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <img
                src="/driver.webp"
                alt={t("about.owner_name")}
                className="rounded-xl w-full h-[400px] object-cover border border-border/50"
              />
              <Badge className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 text-sm">
                {t("about.experience")}
              </Badge>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {t("about.owner_name")}
                </h2>
                <p className="text-primary font-medium text-lg">
                  {t("about.owner_label")}
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.owner_bio")}
              </p>
              <div className="bg-card border border-border/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  {t("about.experience_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Mission Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            {t("about.mission_title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("about.mission_desc")}
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all text-center"
              >
                <CardHeader className="pb-2">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("about.cta_title")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t("about.cta_desc")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white gap-2"
          >
            <a
              href={getWhatsAppUrl("Hello! I'd like to book a cab.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              {t("about.cta_button")}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
