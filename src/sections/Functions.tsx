import { PhotoPanel } from '../components/PhotoPanel';
import { SectionHeader } from '../components/SectionHeader';
import { getImagesForSection, venue } from '../data/venue';

export function Functions() {
  const images = getImagesForSection('functions');

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Functions hosted" title="Made for family ceremonies" align="center">
          <p>The venue focuses on traditional wedding and family functions with facilities sized for large gatherings.</p>
        </SectionHeader>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {venue.functions.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="overflow-hidden rounded-lg border border-temple-900/10 bg-white shadow-soft">
                <div className="h-52">
                  <PhotoPanel image={images[index]} className="h-full" label={`${item.title} venue photo`} />
                </div>
                <div className="border-t-4 border-rose/70 p-5">
                  <Icon className="mb-4 text-rose" size={28} aria-hidden="true" />
                  <h3 className="font-serif text-xl font-semibold text-ink">{item.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
