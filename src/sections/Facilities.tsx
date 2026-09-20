import { SectionHeader } from '../components/SectionHeader';
import { PhotoPanel } from '../components/PhotoPanel';
import { venue, venueImages } from '../data/venue';

export function Facilities() {
  const facilityImage =
    venueImages.find((image) => image.src.includes('20260914_161744.jpg')) ??
    venueImages.find((image) => image.category === 'Dining');

  return (
    <section id="facilities" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="Facilities" title="Everything needed for a smooth family function">
              <p>
                The main hall is supported by dining, rooms, parking, generator backup, CCTV, seating, utensils and building lighting. Customers can arrange their own decoration, with previous-day access available.
              </p>
            </SectionHeader>
            <div className="mt-8 overflow-hidden rounded-lg shadow-soft">
              <PhotoPanel image={facilityImage} className="aspect-[4/3] object-[center_54%]" label="Dining and support facilities photograph" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {venue.facilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-3 rounded-md border border-temple-900/10 bg-temple-50 p-4">
                  <Icon className="mt-0.5 shrink-0 text-rose" size={20} aria-hidden="true" />
                  <p className="text-sm font-medium leading-6 text-stone-800">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
