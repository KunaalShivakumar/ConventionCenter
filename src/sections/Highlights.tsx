import { venue } from '../data/venue';

export function Highlights() {
  return (
    <section className="bg-ink py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {venue.highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/8 p-5 shadow-sm backdrop-blur">
                <Icon className="mb-5 text-temple-200" size={26} aria-hidden="true" />
                <p className="font-serif text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-temple-100">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
