import { MapPinned, MessageCircle, Phone } from 'lucide-react';
import { venue } from '../data/venue';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-4 pb-40 pt-12 text-white sm:px-6 md:pb-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="font-serif text-2xl font-semibold">{venue.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">Pure vegetarian traditional wedding venue next to {venue.temple}.</p>
        </div>
        <address className="not-italic text-sm leading-7 text-white/70">
          <strong className="mb-2 block text-white">Address</strong>
          {venue.addressLines.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </address>
        <div className="text-sm leading-7">
          <strong className="mb-2 block">Contact</strong>
          <a href={venue.phoneHref} className="flex items-center gap-2 text-white/75 hover:text-white">
            <Phone size={16} aria-hidden="true" /> {venue.phoneDisplay}
          </a>
          <a href={venue.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/75 hover:text-white">
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp
          </a>
          <a href={venue.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/75 hover:text-white">
            <MapPinned size={16} aria-hidden="true" /> Google Maps
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-sm text-white/55">
        © {year} {venue.name}. All rights reserved.
      </div>
    </footer>
  );
}
