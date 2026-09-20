import { Phone } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { SectionHeader } from '../components/SectionHeader';
import { venue } from '../data/venue';

export function Pricing() {
  return (
    <section id="pricing" className="section-warm py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Pricing" title="Simple venue rental pricing" align="center">
          <p>Call the manager to check availability, discuss extra hours if needed and confirm the booking directly.</p>
        </SectionHeader>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {venue.pricing.map((item) => (
            <article key={item.label} className="rounded-lg border border-temple-900/10 bg-white/90 p-7 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">{item.label}</p>
              <p className="mt-5 font-serif text-4xl font-semibold text-temple-900">{item.price}</p>
              <p className="mt-4 min-h-12 text-sm leading-6 text-stone-700">{item.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-3 rounded-lg border border-temple-900/10 bg-white/85 p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {venue.pricingNotes.map((note) => (
            <p key={note} className="text-sm font-medium leading-6 text-stone-700">{note}</p>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ButtonLink href={venue.phoneHref} aria-label={`Call ${venue.phoneDisplay} to check availability`}>
            <Phone size={18} aria-hidden="true" />
            Call to Check Availability
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
