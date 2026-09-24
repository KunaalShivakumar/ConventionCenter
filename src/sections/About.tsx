import { MapPin, Phone } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { PhotoPanel } from '../components/PhotoPanel';
import { SectionHeader } from '../components/SectionHeader';
import { getImagesForSection, heroImage, venue } from '../data/venue';

export function About() {
  const image = getImagesForSection('about')[0] ?? heroImage;

  return (
    <section id="about" className="section-warm py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative overflow-hidden rounded-lg bg-ink shadow-soft ring-1 ring-temple-900/10">
          <PhotoPanel image={image} className="aspect-[4/5] object-[center_48%] sm:aspect-[4/3] lg:aspect-[5/4]" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/82 to-transparent p-5 pt-16">
            <p className="w-fit rounded-full bg-black/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-temple-100 backdrop-blur">
              Decorated main hall
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-temple-900/10 bg-white p-5 shadow-soft sm:p-7">
          <SectionHeader eyebrow="About the venue" title="Traditional, spacious and close to the temple">
            <p>
              {venue.name} is a traditional wedding and family-function venue in Gantiganahalli, located next to {venue.temple}. The venue is 100% vegetarian and supports weddings, engagements, receptions and naming ceremonies.
            </p>
            <p className="mt-4">
              Families have access to a large main hall, dining facility, guest rooms, bride and groom rooms, parking opposite the Kalyana Mantapa, generator backup and CCTV.
            </p>
          </SectionHeader>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={venue.phoneHref}>
              <Phone size={18} aria-hidden="true" />
              Call to Check Availability
            </ButtonLink>
            <ButtonLink href={venue.mapsUrl} target="_blank" rel="noreferrer" variant="secondary">
              <MapPin size={18} aria-hidden="true" />
              Get Directions
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
