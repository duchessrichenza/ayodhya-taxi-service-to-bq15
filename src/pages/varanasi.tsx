import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Route, MessageCircle, Star, Calendar } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const locations = [
  { key: 'dashashwamedh', image: '/ganga-aarti.webp' },
  { key: 'kashi_vishwanath', image: '/kashi-vishwanath.webp' },
  { key: 'sarnath', image: '/sarnath.webp' },
  { key: 'tridev', image: '/ganga-aarti.webp' },
  { key: 'bharat_mata', image: '/kashi-vishwanath.webp' },
  { key: 'sankat_mochan', image: '/ganga-aarti.webp' },
  { key: 'tulsi_manas', image: '/kashi-vishwanath.webp' },
  { key: 'durga_temple', image: '/ganga-aarti.webp' },
  { key: 'bhu', image: '/kashi-vishwanath.webp' },
];

export function VaranasiPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/ganga-aarti.webp')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('varanasi.section_title')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t('varanasi.section_subtitle')}
          </p>
        </div>
      </section>

      {/* Location Cards Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Must-Visit Places in Varanasi
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore the spiritual capital of India — from ancient temples to the mesmerizing Ganga Aarti.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Card
              key={loc.key}
              className="overflow-hidden border-border/50 bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={loc.image}
                  alt={t(`varanasi.${loc.key}.name` as any)}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">
                  {t(`varanasi.${loc.key}.name` as any)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`varanasi.${loc.key}.desc` as any)}
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
            Book Varanasi Tour
          </h2>
          <p className="text-muted-foreground mb-8">
            Experience the magic of Kashi with our guided tour packages. Comfortable transport, local guides, and spiritual immersion.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a
              href={getWhatsAppUrl("Hi, I'd like to book a Varanasi tour")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Varanasi Tour on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Travel Info */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-10">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Travel Information
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Route className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">Distance from Ayodhya</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Approximately 200 km (4–5 hours by road). We provide comfortable AC vehicles
                for the entire journey with experienced drivers.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                <CardTitle className="text-base">Recommended Duration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                2–3 days to fully experience Varanasi. Attend morning & evening Ganga Aarti,
                explore temples, and take a sunrise boat ride on the Ganges.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">Best Time to Visit</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                October to March for pleasant weather. Dev Deepawali (November) transforms
                the ghats into a spectacular festival of lights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
