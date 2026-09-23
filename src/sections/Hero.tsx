import { ExternalLink, MapPin, Phone, Star, Utensils, Users } from 'lucide-react';
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
      <div className="relative mx-auto flex min-h-[calc(94svh-72px)] max-w-[92rem] items-center px-4 pb-28 pt-24 sm:min-h-[calc(96vh-72px)] sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">

          <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.78)] sm:text-6xl lg:text-7xl">
            {venue.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.72)]">{venue.tagline}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-bold text-white">
            <a
              href={venue.googleRating.listingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/14 px-4 py-2 shadow-sm backdrop-blur transition hover:bg-white/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`${venue.googleRating.rating} out of ${venue.googleRating.maxRating} on Google. Opens Google Maps listing.`}
            >
              {venue.googleRating.rating.toFixed(1)}
              <Star size={15} className="fill-temple-200 text-temple-200" aria-hidden="true" />
              on Google
              <ExternalLink size={14} aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-temple-100/35 bg-white/12 px-4 py-2 shadow-sm backdrop-blur">
              <Users size={16} aria-hidden="true" /> 750-1,000 Guests
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-temple-100/35 bg-white/12 px-4 py-2 shadow-sm backdrop-blur">
              <Utensils size={16} aria-hidden="true" /> Pure Vegetarian
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={venue.phoneHref} variant="gold" className="w-full text-base font-extrabold shadow-[0_18px_45px_rgba(0,0,0,0.42)] sm:w-auto" aria-label={`Call ${venue.phoneDisplay} to check availability`}>
              <Phone size={18} aria-hidden="true" />
              Call to Check Availability
            </ButtonLink>
            <WhatsAppLink variant="light" className="w-full sm:w-auto" />
          </div>

          <div className="mt-6 max-w-2xl rounded-md border border-white/18 bg-black/20 p-4 text-sm font-semibold leading-6 text-temple-50 shadow-sm backdrop-blur">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 shrink-0 text-temple-200" size={17} aria-hidden="true" />
              <span>{venue.addressShort}</span>
            </p>
            <p className="mt-1 pl-7 text-temple-100">{venue.homeLocationNote}</p>
          </div>
        </div>
      </div>
      <div className="relative mx-auto -mt-10 hidden max-w-7xl px-4 pb-6 sm:px-6 md:block lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-temple-200/60 to-transparent" />
      </div>
    </section>
  );
}
