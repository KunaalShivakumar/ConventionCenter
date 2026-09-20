import { Camera } from 'lucide-react';
import { useState } from 'react';
import { Lightbox } from '../components/Lightbox';
import { SectionHeader } from '../components/SectionHeader';
import { galleryImages } from '../data/venue';

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const featuredImage = galleryImages[0];
  const remainingImages = galleryImages.slice(1);

  return (
    <section id="gallery" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Gallery" title="Venue photographs" align="center">
          <p>Explore actual photographs of the entrance, main hall, dining area, rooms and supporting facilities.</p>
        </SectionHeader>

        {galleryImages.length ? (
          <div className="mt-12 space-y-3">
            {featuredImage ? (
              <button
                type="button"
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-lg bg-temple-100 shadow-soft transition duration-300 hover:shadow-[0_24px_70px_rgba(47,30,20,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-700 sm:aspect-[16/9] lg:aspect-[21/9]"
                onClick={() => setActiveIndex(0)}
                aria-label={`Open photo: ${featuredImage.alt}`}
              >
                <img src={featuredImage.src} alt={featuredImage.alt} className="h-full w-full object-cover object-[center_45%] transition duration-500 group-hover:scale-[1.025]" loading="lazy" />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/10 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 rounded-full bg-black/65 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
                  {featuredImage.category}
                </span>
              </button>
            ) : null}

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {remainingImages.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-temple-100 shadow-sm transition duration-300 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-700"
                  onClick={() => setActiveIndex(index + 1)}
                  aria-label={`Open photo: ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" loading="lazy" />
                  <span className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/80 to-transparent opacity-95" aria-hidden="true" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
                    {image.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-12 rounded-lg border border-dashed border-temple-700/35 bg-temple-50 p-8 text-center">
            <Camera className="mx-auto mb-4 text-rose" size={34} aria-hidden="true" />
            <p className="font-serif text-2xl font-semibold text-ink">No venue photographs were available in this workspace.</p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-700">
              The gallery component is ready with lazy loading, keyboard lightbox controls, categories and responsive layout once the actual uploaded photos are present.
            </p>
          </div>
        )}
      </div>
      {activeIndex !== null ? (
        <Lightbox images={galleryImages} index={activeIndex} onClose={() => setActiveIndex(null)} onMove={setActiveIndex} />
      ) : null}
    </section>
  );
}
