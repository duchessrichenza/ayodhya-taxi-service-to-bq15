import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/hero-ram-mandir.webp', caption: 'Ram Mandir, Ayodhya' },
  { src: '/saryu-ghat.webp', caption: 'Saryu Ghat' },
  { src: '/hanuman-garhi.webp', caption: 'Hanuman Garhi' },
  { src: '/ganga-aarti.webp', caption: 'Ganga Aarti, Varanasi' },
  { src: '/kashi-vishwanath.webp', caption: 'Kashi Vishwanath Temple' },
  { src: '/innova-crysta.webp', caption: 'Innova Crysta' },
  { src: '/fleet-cars.webp', caption: 'Our Fleet' },
  { src: '/wedding-car.webp', caption: 'Wedding Car Service' },
  { src: '/kanak-bhawan.webp', caption: 'Kanak Bhawan' },
  { src: '/ram-ki-paidi.webp', caption: 'Ram Ki Paidi' },
  { src: '/sarnath.webp', caption: 'Sarnath' },
  { src: '/prayagraj.webp', caption: 'Prayagraj' },
  { src: '/driver.webp', caption: 'Professional Drivers' },
];

export function GalleryPage() {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('gallery.section_title')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('gallery.section_subtitle')}
          </p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, idx) => (
            <Card
              key={idx}
              className="break-inside-avoid overflow-hidden border-border/50 bg-card cursor-pointer group"
              onClick={() => setLightboxImage(img)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.caption}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center text-white mt-4 text-lg font-medium">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
