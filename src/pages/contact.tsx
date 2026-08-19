import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin, Phone, Clock, MessageCircle, Send } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function ContactPage() {
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${name}
Phone: ${phone}
Service: ${service}
Pickup: ${pickup}
Drop: ${drop}
Date: ${date}
Passengers: ${passengers}
Message: ${message}`;
    window.open(getWhatsAppUrl(whatsappMessage), '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('contact.section_title')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('contact.section_subtitle')}
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="text-xl">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t('contact.form_submit')}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t('contact.form_name')}
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('contact.form_name')}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t('contact.form_phone')}
                  </label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('contact.form_phone')}
                    type="tel"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t('contact.form_service')}
                  </label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('contact.form_service')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ayodhya-darshan">Ayodhya Darshan</SelectItem>
                      <SelectItem value="varanasi-tour">Varanasi Tour</SelectItem>
                      <SelectItem value="airport-transfer">Airport Transfer</SelectItem>
                      <SelectItem value="outstation">Outstation Cab</SelectItem>
                      <SelectItem value="wedding">Wedding Car</SelectItem>
                      <SelectItem value="local">Local Rental</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {t('contact.form_pickup')}
                    </label>
                    <Input
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder={t('contact.form_pickup')}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {t('contact.form_drop')}
                    </label>
                    <Input
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      placeholder={t('contact.form_drop')}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {t('contact.form_date')}
                    </label>
                    <Input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {t('contact.form_passengers')}
                    </label>
                    <Input
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      placeholder={t('contact.form_passengers')}
                      type="number"
                      min="1"
                      max="50"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t('contact.form_message')}
                  </label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('contact.form_message')}
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {t('contact.form_submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right: Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t('contact.address_label')}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t('contact.address')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t('contact.phone_label')}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t('contact.phone')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t('contact.hours_label')}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t('contact.hours')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t('contact.whatsapp_label')}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Chat with us instantly on WhatsApp
                  </p>
                  <Button asChild variant="outline" size="sm" className="mt-2 border-primary text-primary hover:bg-primary/10">
                    <a
                      href={getWhatsAppUrl('Hi, I need help with booking')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-1.5 h-4 w-4" />
                      Open WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Google Maps Embed */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Find Us on Map
          </span>
        </h2>
        <Card className="overflow-hidden border-border/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5!2d82.19!3d26.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ3JzI0LjAiTiA4MsKwMTEnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jai Shree Ram Tours & Travels Location"
            className="w-full"
          />
        </Card>
      </section>

      {/* Bottom CTA Buttons */}
      <section className="py-12 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="tel:+919628697744">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <a
              href={getWhatsAppUrl('Hi, I would like to enquire about your services')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
