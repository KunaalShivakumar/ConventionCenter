import { MapPinned, Phone } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { PhotoPanel } from '../components/PhotoPanel';
import { SectionHeader } from '../components/SectionHeader';
import { venue, venueImages } from '../data/venue';

export function Location() {
  const exterior =
    venueImages.find((image) => image.section === 'hero') ??
    venueImages.find((image) => image.category === 'Exterior');

  return (
    <section id="location" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-lg bg-temple-50 p-6 shadow-sm sm:p-8">
          <SectionHeader eyebrow="Location" title="Next to Kashi Vishwanatha Temple">
            <p>{venue.name} is located in Gantiganahalli, next to {venue.temple}. Use the confirmed Google Maps link for directions to the venue.</p>
          </SectionHeader>
          <address className="mt-8 not-italic text-base leading-8 text-stone-700">
            <strong className="block font-serif text-2xl font-semibold text-ink">{venue.name}</strong>
            {venue.addressLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={venue.mapsUrl} target="_blank" rel="noreferrer">
              <MapPinned size={18} aria-hidden="true" />
              Get Directions
            </ButtonLink>
            <ButtonLink href={venue.phoneHref} variant="secondary">
              <Phone size={18} aria-hidden="true" />
              Call to Check Availability
            </ButtonLink>
          </div>
        </div>
        <div className="relative min-h-[460px] overflow-hidden rounded-lg shadow-soft">
          <PhotoPanel image={exterior} className="absolute inset-0 h-full w-full object-[center_47%]" label="Venue exterior location photograph" />
          <div className="absolute inset-0 location-photo-overlay" />
          <div className="relative flex min-h-[460px] flex-col justify-end p-7 text-white sm:p-9">
            <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-black/45 px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur">
              <MapPinned size={17} aria-hidden="true" />
              Gantiganahalli, Karnataka
            </p>
            <h3 className="max-w-lg font-serif text-3xl font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">Easy to find beside the temple</h3>
            <p className="mt-3 max-w-lg text-sm font-medium leading-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.72)]">
              Share the directions link with guests so they can navigate directly to the Kalyana Mantapa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
