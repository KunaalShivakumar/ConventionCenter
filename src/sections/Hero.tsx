import { Camera, MapPin, Phone, Utensils, Users } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { PhotoPanel } from '../components/PhotoPanel';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { heroImage, venue } from '../data/venue';

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        {heroImage ? (
          <PhotoPanel image={heroImage} className="hero-bg-photo" />
        ) : (
          <div className="h-full w-full bg-temple-900 mandala-pattern opacity-40" />
        )}
        <div className="absolute inset-0 hero-image-overlay" />
        <div className="absolute inset-0 hero-warm-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>
      <div className="relative mx-auto flex min-h-[calc(94svh-72px)] max-w-[92rem] items-center px-4 pb-32 pt-24 sm:min-h-[calc(96vh-72px)] sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-temple-200/55 bg-black/20 px-4 py-2 text-sm font-bold text-temple-100 shadow-sm backdrop-blur">
            <MapPin size={16} aria-hidden="true" />
            Next to {venue.temple}
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.78)] sm:text-6xl lg:text-7xl">
            {venue.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.72)]">{venue.tagline}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-temple-100/35 bg-white/12 px-4 py-2 shadow-sm backdrop-blur">
              <Utensils size={16} aria-hidden="true" /> Pure Vegetarian
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-temple-100/35 bg-white/12 px-4 py-2 shadow-sm backdrop-blur">
              <Users size={16} aria-hidden="true" /> 750-1,000 Guests
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-temple-100/35 bg-white/12 px-4 py-2 shadow-sm backdrop-blur">
              <MapPin size={16} aria-hidden="true" /> Temple Adjacent
            </span>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={venue.phoneHref} variant="gold" className="w-full text-base font-extrabold shadow-[0_18px_45px_rgba(0,0,0,0.42)] sm:w-auto" aria-label={`Call ${venue.phoneDisplay} to check availability`}>
              <Phone size={18} aria-hidden="true" />
              Call to Check Availability
            </ButtonLink>
            <WhatsAppLink variant="light" className="w-full sm:w-auto" />
            <ButtonLink href="#gallery" variant="light" className="w-full sm:w-auto">
              <Camera size={18} aria-hidden="true" />
              View Gallery
            </ButtonLink>
          </div>
          <p className="mt-6 max-w-2xl text-sm font-semibold leading-6 text-temple-50 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
            Please call the venue directly to check availability and confirm your booking, as the manager also handles offline bookings.
          </p>
        </div>
      </div>
      <div className="relative mx-auto -mt-10 hidden max-w-7xl px-4 pb-6 sm:px-6 md:block lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-temple-200/60 to-transparent" />
      </div>
    </section>
  );
}
