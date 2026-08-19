import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Sun, MessageCircle, Info, Star } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const locations = [
  { key: 'ram_mandir', image: '/hero-ram-mandir.webp' },
  { key: 'hanuman_garhi', image: '/hanuman-garhi.webp' },
  { key: 'saryu_ghat', image: '/saryu-ghat.webp' },
  { key: 'kanak_bhawan', image: '/kanak-bhawan.webp' },
  { key: 'ram_ki_paidi', image: '/ram-ki-paidi.webp' },
  { key: 'nageshwarnath', image: '/saryu-ghat.webp' },
  { key: 'sita_ki_rasoi', image: '/hero-ram-mandir.webp' },
];

export function AyodhyaPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-ram-mandir.webp')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('ayodhya.section_title')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t('ayodhya.section_subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="h-5 w-5 text-primary" />
          <Badge variant="outline" className="border-primary text-primary">
            Holy City
          </Badge>
          <Star className="h-5 w-5 text-primary" />
        </div>
        <p className="text-lg leading-7 text-muted-foreground">
          Ayodhya, the birthplace of Lord Rama, is one of the seven most sacred cities in Hinduism.
          Nestled on the banks of the sacred Saryu River in Uttar Pradesh, this ancient city draws
          millions of pilgrims and tourists each year. Experience divine blessings at the magnificent
          Ram Mandir and explore centuries-old temples that echo with spiritual energy.
        </p>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Location Cards Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Places to Visit
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Card
              key={loc.key}
              className="overflow-hidden border-border/50 bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={loc.image}
                  alt={t(`ayodhya.${loc.key}.name` as any)}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">
                  {t(`ayodhya.${loc.key}.name` as any)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`ayodhya.${loc.key}.desc` as any)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Book Ayodhya Darshan
          </h2>
          <p className="text-muted-foreground mb-8">
            Let us plan your complete Ayodhya pilgrimage. Comfortable transport, guided tours, and hassle-free darshan arrangements.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a
              href={getWhatsAppUrl("Hi, I'd like to book Ayodhya Darshan tour")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Ayodhya Darshan on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Darshan Tips */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-10">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Darshan Tips & Timings
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">Temple Timings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ram Mandir: 7:00 AM – 11:00 AM & 2:00 PM – 7:00 PM.
                Arrive early to avoid long queues, especially on weekends.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Sun className="h-5 w-5 text-accent" />
                <CardTitle className="text-base">Best Time to Visit</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                October to March offers pleasant weather. Ram Navami (March/April)
                and Diwali are especially grand but very crowded.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">Important Notes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mobile phones & cameras are not allowed inside Ram Mandir.
                Dress modestly. Free lockers available near the temple entrance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
