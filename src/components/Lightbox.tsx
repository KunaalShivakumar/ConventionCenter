import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect } from 'react';
import type { VenueImage } from '../data/venue';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

type LightboxProps = {
  images: VenueImage[];
  index: number;
  onClose: () => void;
  onMove: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onMove }: LightboxProps) {
  const image = images[index];
  useBodyScrollLock(Boolean(image));

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onMove((index - 1 + images.length) % images.length);
      if (event.key === 'ArrowRight') onMove((index + 1) % images.length);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, index, onClose, onMove]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-ink/95 p-4 text-white" role="dialog" aria-modal="true" aria-label="Venue photo viewer">
      <button
        type="button"
        className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X aria-hidden="true" />
      </button>
      <button
        type="button"
        className="absolute left-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        onClick={() => onMove((index - 1 + images.length) % images.length)}
        aria-label="Previous photo"
      >
        <ChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        onClick={() => onMove((index + 1) % images.length)}
        aria-label="Next photo"
      >
        <ChevronRight aria-hidden="true" />
      </button>
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <img src={image.src} alt={image.alt} className="max-h-[82vh] max-w-full rounded-md object-contain" />
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-temple-200">{image.category}</p>
          <p className="mt-1 text-sm text-white/80">{index + 1} of {images.length}</p>
        </div>
      </div>
    </div>
  );
}
