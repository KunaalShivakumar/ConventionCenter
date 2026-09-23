import { ExternalLink, Star } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { SectionHeader } from '../components/SectionHeader';
import { venue } from '../data/venue';

export function Reviews() {
  return (
    <section id="reviews" className="section-warm py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader eyebrow="Guest Reviews" title="What Our Guests Say">
            <p>
              Rated {venue.googleRating.rating.toFixed(1)} out of {venue.googleRating.maxRating} on Google, based on {venue.googleRating.reviewCountDisplay} reviews. Tap any review card to open the Google listing.
            </p>
          </SectionHeader>
          <ButtonLink href={venue.googleRating.listingUrl} target="_blank" rel="noreferrer" variant="secondary" className="w-full sm:w-fit">
            <ExternalLink size={18} aria-hidden="true" />
            View All Reviews on Google
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {venue.reviews.map((review, index) => {
            const starRating = review.starRating ?? Math.round(venue.googleRating.rating);

            return (
              <a
                key={`${review.reviewerName}-${index}`}
                href={venue.googleRating.listingUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-temple-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-700"
                aria-label={`Read ${review.reviewerName}'s Google review on Google Maps`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-serif text-xl font-semibold text-ink">{review.reviewerName}</p>
                  <span className="rounded-full bg-temple-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-temple-800">Google</span>
                </div>

                <div className="mt-4 flex min-h-6 items-center gap-1 text-temple-500" aria-label={`${starRating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={18}
                      className={starIndex < starRating ? 'fill-temple-500 text-temple-500' : 'text-stone-300'}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="mt-5 text-base leading-7 text-stone-700">{review.excerpt}</p>
                <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-rose">
                  {review.attribution}
                  <ExternalLink size={14} aria-hidden="true" />
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
