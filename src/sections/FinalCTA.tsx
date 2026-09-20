import { MapPinned, Phone } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { venue } from '../data/venue';

export function FinalCTA() {
  return (
    <section id="contact" className="bg-temple-900 px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-temple-200">Contact</p>
        <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Planning Your Wedding?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-temple-50">
          Call us to check availability and discuss your requirements. WhatsApp is available as a secondary contact option.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={venue.phoneHref} className="bg-white text-temple-900 hover:bg-temple-100" aria-label={`Call ${venue.phoneDisplay} to check availability`}>
            <Phone size={18} aria-hidden="true" />
            Call to Check Availability
          </ButtonLink>
          <WhatsAppLink variant="light" />
          <ButtonLink href={venue.mapsUrl} target="_blank" rel="noreferrer" variant="light">
            <MapPinned size={18} aria-hidden="true" />
            Get Directions
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
