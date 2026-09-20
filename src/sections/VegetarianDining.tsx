import { ChefHat, Utensils } from 'lucide-react';
import { PhotoPanel } from '../components/PhotoPanel';
import { SectionHeader } from '../components/SectionHeader';
import { getImagesForSection, venue } from '../data/venue';

export function VegetarianDining() {
  const image = getImagesForSection('dining')[0];

  return (
    <section className="bg-temple-900 py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-temple-200">Dining</p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Pure Vegetarian Dining</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-temple-50">
            The venue is 100% vegetarian, with dining capacity for approximately {venue.capacities.dining} people at a time. Utensils are provided, and catering can be arranged by the venue.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/15 bg-white/10 p-5">
              <ChefHat className="mb-4 text-temple-200" aria-hidden="true" />
              <p className="font-serif text-3xl font-semibold">100%</p>
              <p className="mt-1 text-sm font-medium text-temple-100">Vegetarian</p>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-5">
              <Utensils className="mb-4 text-temple-200" aria-hidden="true" />
              <p className="font-serif text-3xl font-semibold">{venue.capacities.dining}</p>
              <p className="mt-1 text-sm font-medium text-temple-100">People at a time</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-white/15 shadow-soft">
          <PhotoPanel image={image} className="aspect-[4/3]" label="Pure vegetarian dining area photograph" />
        </div>
      </div>
    </section>
  );
}
