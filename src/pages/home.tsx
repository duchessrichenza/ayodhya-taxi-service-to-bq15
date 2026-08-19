import { Link } from "react-router-dom"
import { useLanguage } from "@/lib/i18n"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  MapPin,
  Plane,
  ShieldCheck,
  Clock,
  Wrench,
  Compass,
  Phone,
  Star,
  Users,
  Car,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  IndianRupee,
} from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const heroImages = [
  "/hero-ram-mandir.webp",
  "/saryu-ghat.webp",
  "/ganga-aarti.webp",
  "/hanuman-garhi.webp",
]

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <StatsSection />
      <FleetPreview />
      <AyodhyaPreview />
      <VaranasiPreview />
      <ToursPreview />
      <AirportSection />
      <TestimonialsSection />
      <AboutPreview />
      <GalleryPreview />
      <FaqSection />
      <CtaBanner />
      <ContactPreview />
    </div>
  )
}

function HeroSection() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((p) => (p + 1) % heroImages.length), [])
  const prev = useCallback(() => setCurrent((p) => (p - 1 + heroImages.length) % heroImages.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {heroImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={src} alt="" className="h-full w-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
              {t("hero.tagline")}
            </Badge>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href={getWhatsAppUrl(t("common.whatsapp_default_message"))} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  {t("hero.cta_book")}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary/50 hover:bg-primary/10" asChild>
                <Link to="/tours">
                  <Compass className="h-5 w-5" />
                  {t("hero.cta_explore")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 backdrop-blur-sm transition-colors hover:bg-background/80">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 backdrop-blur-sm transition-colors hover:bg-background/80">
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2.5 bg-foreground/30"}`}
          />
        ))}
      </div>
    </section>
  )
}

function ServicesPreview() {
  const { t } = useLanguage()
  const services = [
    { key: "local", img: "/hero-ram-mandir.webp" },
    { key: "wedding", img: "/wedding-car.webp" },
    { key: "airport", img: "/fleet-cars.webp" },
    { key: "religious", img: "/ganga-aarti.webp" },
    { key: "outstation", img: "/prayagraj.webp" },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("services.section_title")} subtitle={t("services.section_subtitle")} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.key}
              to="/services"
              className={`group overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${
                i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
              } ${services.length === 5 && i >= 3 ? "lg:col-span-1" : ""}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={t(`services.${s.key}_title` as any)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-1.5 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {t(`services.${s.key}_title` as any)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {t(`services.${s.key}_desc` as any)}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {t("common.learn_more")} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" className="gap-2 border-primary/50" asChild>
            <Link to="/services">
              {t("common.view_all")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const { t } = useLanguage()
  const reasons = [
    { n: 1, icon: ShieldCheck },
    { n: 2, icon: IndianRupee },
    { n: 3, icon: Clock },
    { n: 4, icon: Wrench },
    { n: 5, icon: Compass },
  ]

  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("why_choose.section_title")} subtitle={t("why_choose.section_subtitle")} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((r) => (
            <Card key={r.n} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <r.icon className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold">{t(`why_choose.reason${r.n}_title` as any)}</h3>
                <p className="text-sm text-muted-foreground">{t(`why_choose.reason${r.n}_desc` as any)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const { t } = useLanguage()
  const stats = [
    { value: "5000+", label: t("about.happy_customers"), icon: Users },
    { value: "15000+", label: t("about.trips_completed"), icon: Car },
    { value: "10+", label: t("about.years_experience"), icon: Clock },
    { value: "15+", label: t("about.vehicles_in_fleet"), icon: Car },
  ]

  return (
    <section className="border-y border-border/50 bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
              <div className="text-3xl font-extrabold text-primary md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FleetPreview() {
  const { t } = useLanguage()
  const vehicles = [
    { key: "innova", img: "/innova-crysta.webp" },
    { key: "ertiga", img: "/fleet-cars.webp" },
    { key: "dzire", img: "/fleet-cars.webp" },
    { key: "wagonr", img: "/fleet-cars.webp" },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("fleet.section_title")} subtitle={t("fleet.section_subtitle")} />
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
          {vehicles.map((v) => (
            <Card key={v.key} className="min-w-[280px] snap-start border-border/50 bg-card md:min-w-0">
              <div className="aspect-video overflow-hidden">
                <img src={v.img} alt={t(`fleet.${v.key}.name` as any)} className="h-full w-full object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{t(`fleet.${v.key}.name` as any)}</h3>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">{t(`fleet.${v.key}.rate` as any)}</span>
                  <span className="text-sm text-muted-foreground">/{t("fleet.per_km")}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{t(`fleet.${v.key}.capacity` as any)}</p>
                <Button size="sm" className="mt-3 w-full gap-2" asChild>
                  <a href={getWhatsAppUrl(`Hi, I'd like to book a ${t(`fleet.${v.key}.name` as any)}`)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" /> {t("common.book_now")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="gap-2 border-primary/50" asChild>
            <Link to="/fleet">{t("common.view_all")} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function AyodhyaPreview() {
  const { t } = useLanguage()
  const locations = [
    { key: "ram_mandir", img: "/hero-ram-mandir.webp" },
    { key: "hanuman_garhi", img: "/hanuman-garhi.webp" },
    { key: "saryu_ghat", img: "/saryu-ghat.webp" },
    { key: "kanak_bhawan", img: "/kanak-bhawan.webp" },
  ]

  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("ayodhya.section_title")} subtitle={t("ayodhya.section_subtitle")} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc) => (
            <Card key={loc.key} className="group overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={loc.img} alt={t(`ayodhya.${loc.key}.name` as any)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{t(`ayodhya.${loc.key}.name` as any)}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{t(`ayodhya.${loc.key}.desc` as any)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="gap-2 border-primary/50" asChild>
            <Link to="/ayodhya">{t("common.view_all")} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function VaranasiPreview() {
  const { t } = useLanguage()
  const locations = [
    { key: "dashashwamedh", img: "/ganga-aarti.webp" },
    { key: "kashi_vishwanath", img: "/kashi-vishwanath.webp" },
    { key: "sarnath", img: "/sarnath.webp" },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("varanasi.section_title")} subtitle={t("varanasi.section_subtitle")} />
        <div className="grid gap-6 sm:grid-cols-3">
          {locations.map((loc) => (
            <Card key={loc.key} className="group overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={loc.img} alt={t(`varanasi.${loc.key}.name` as any)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{t(`varanasi.${loc.key}.name` as any)}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{t(`varanasi.${loc.key}.desc` as any)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="gap-2 border-primary/50" asChild>
            <Link to="/varanasi">{t("common.view_all")} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ToursPreview() {
  const { t } = useLanguage()
  const routes = [
    { key: "prayagraj", img: "/prayagraj.webp" },
    { key: "lucknow", img: "/fleet-cars.webp" },
    { key: "varanasi", img: "/ganga-aarti.webp" },
    { key: "agra_mathura", img: "/hero-ram-mandir.webp" },
  ]

  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("tours.section_title")} subtitle={t("tours.section_subtitle")} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((r) => (
            <Card key={r.key} className="border-border/50 bg-card transition-all hover:border-primary/30">
              <div className="aspect-video overflow-hidden">
                <img src={r.img} alt={t(`tours.${r.key}.name` as any)} className="h-full w-full object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{t(`tours.${r.key}.name` as any)}</h3>
                <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
                  <span>{t(`tours.${r.key}.distance` as any)}</span>
                  <span>{t(`tours.${r.key}.time` as any)}</span>
                </div>
                <Button size="sm" variant="outline" className="mt-3 w-full gap-2 border-primary/50" asChild>
                  <a href={getWhatsAppUrl(`Hi, I'd like to book a trip to ${t(`tours.${r.key}.name` as any)} from Ayodhya`)} target="_blank" rel="noopener noreferrer">
                    {t("common.enquire")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="gap-2 border-primary/50" asChild>
            <Link to="/tours">{t("common.view_all")} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function AirportSection() {
  const { t } = useLanguage()
  const airports = [
    { name: "Lucknow (LKO)", distance: "~135 km" },
    { name: "Varanasi (VNS)", distance: "~200 km" },
    { name: "Ayodhya (AYJ)", distance: "~25 km" },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("services.airport_title")} subtitle={t("services.airport_desc")} />
        <div className="grid gap-6 sm:grid-cols-3">
          {airports.map((a) => (
            <Card key={a.name} className="border-border/50 bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Plane className="mb-3 h-10 w-10 text-primary" />
                <h3 className="font-semibold">{a.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.distance}</p>
                <Button size="sm" className="mt-4 gap-2" asChild>
                  <a href={getWhatsAppUrl(`Hi, I need airport pickup/drop for ${a.name} airport`)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" /> {t("common.book_now")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const { t } = useLanguage()
  const testimonials = [1, 2, 3, 4]

  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("testimonials.section_title")} subtitle={t("testimonials.section_subtitle")} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((n) => (
            <Card key={n} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="mb-3 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm italic text-muted-foreground">"{t(`testimonials.t${n}_text` as any)}"</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                    {(t(`testimonials.t${n}_name` as any) as string).charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t(`testimonials.t${n}_name` as any)}</div>
                    <div className="text-xs text-muted-foreground">{t(`testimonials.t${n}_location` as any)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img src="/driver.webp" alt={t("about.owner_name")} className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="mb-2 text-3xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("about.section_title")}
              </span>
            </h2>
            <p className="mb-4 text-muted-foreground">{t("about.description")}</p>
            <div className="mb-4 rounded-lg bg-primary/10 p-4">
              <div className="font-semibold">{t("about.owner_name")}</div>
              <div className="text-sm text-muted-foreground">{t("about.owner_label")}</div>
            </div>
            <p className="text-sm text-muted-foreground">{t("about.mission_desc")}</p>
            <Button className="mt-6 gap-2" asChild>
              <Link to="/about">{t("common.learn_more")} <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function GalleryPreview() {
  const { t } = useLanguage()
  const images = [
    "/hero-ram-mandir.webp",
    "/saryu-ghat.webp",
    "/hanuman-garhi.webp",
    "/ganga-aarti.webp",
    "/kashi-vishwanath.webp",
    "/wedding-car.webp",
  ]

  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("gallery.section_title")} subtitle={t("gallery.section_subtitle")} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((src, i) => (
            <div key={src} className={`overflow-hidden rounded-lg ${i === 0 ? "col-span-2 row-span-2 md:col-span-1" : ""}`}>
              <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="gap-2 border-primary/50" asChild>
            <Link to="/gallery">{t("common.view_all")} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("faq.section_title")} subtitle={t("faq.section_subtitle")} />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <AccordionItem key={n} value={`faq-${n}`} className="rounded-lg border border-border/50 bg-card px-4">
                <AccordionTrigger className="text-left text-sm font-medium hover:text-primary">
                  {t(`faq.q${n}` as any)}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {t(`faq.a${n}` as any)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("hero.cta_book")}
          </span>
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-muted-foreground">{t("hero.subtitle")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2" asChild>
            <a href={getWhatsAppUrl(t("common.whatsapp_default_message"))} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-primary/50" asChild>
            <a href="tel:+919628697744">
              <Phone className="h-5 w-5" /> {t("common.call_now")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ContactPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("contact.section_title")} subtitle={t("contact.section_subtitle")} />
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          <Card className="border-border/50 bg-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <MapPin className="mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-1 text-sm font-semibold">{t("contact.address_label")}</h3>
              <p className="text-xs text-muted-foreground">{t("contact.address")}</p>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Phone className="mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-1 text-sm font-semibold">{t("contact.phone_label")}</h3>
              <a href="tel:+919628697744" className="text-sm text-primary hover:underline">{t("contact.phone")}</a>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Clock className="mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-1 text-sm font-semibold">{t("contact.hours_label")}</h3>
              <p className="text-sm text-muted-foreground">{t("contact.hours")}</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button className="gap-2" asChild>
            <Link to="/contact">{t("common.view_all")} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-3 text-3xl font-bold md:text-4xl">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{title}</span>
      </h2>
      <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>
    </div>
  )
}
