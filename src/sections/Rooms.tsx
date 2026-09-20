import { Flower2, HeartHandshake, Home } from 'lucide-react';
import { PhotoPanel } from '../components/PhotoPanel';
import { SectionHeader } from '../components/SectionHeader';
import { getImagesForSection } from '../data/venue';

const rooms = [
  { title: '5 AC Rooms', icon: Home },
  { title: '5 Non-AC Rooms', icon: Home },
  { title: 'Separate Bride Room', icon: Flower2 },
  { title: 'Separate Groom Room', icon: HeartHandshake }
];

export function Rooms() {
  const image = getImagesForSection('rooms')[0];

  return (
    <section className="bg-temple-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-lg shadow-soft">
            <PhotoPanel image={image} className="aspect-[4/3]" label="Guest rooms photograph" />
          </div>
          <div>
            <SectionHeader eyebrow="Rooms" title="Comfort for the wedding party">
              <p>The venue provides rooms for families and separate spaces for the bride and groom.</p>
            </SectionHeader>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {rooms.map((room) => {
                const Icon = room.icon;
                return (
                  <div key={room.title} className="rounded-lg border border-temple-900/10 bg-white p-5 shadow-sm">
                    <Icon className="mb-4 text-rose" aria-hidden="true" />
                    <h3 className="font-serif text-xl font-semibold text-ink">{room.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
