import { Camera } from 'lucide-react';
import type { VenueImage } from '../data/venue';
import { classNames } from '../utils/classNames';

type PhotoPanelProps = {
  image?: VenueImage;
  className?: string;
  label?: string;
};

export function PhotoPanel({ image, className, label = 'Venue photography' }: PhotoPanelProps) {
  if (image) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        className={classNames('h-full w-full object-cover photo-polish', className)}
        loading={image.featured ? 'eager' : 'lazy'}
      />
    );
  }

  return (
    <div
      className={classNames(
        'relative flex min-h-72 items-center justify-center overflow-hidden bg-temple-100 text-temple-800',
        className
      )}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 mandala-pattern opacity-80" />
      <div className="relative mx-8 max-w-sm text-center">
        <Camera className="mx-auto mb-4" size={36} aria-hidden="true" />
        <p className="font-serif text-2xl font-semibold">Venue photographs pending</p>
        <p className="mt-2 text-sm leading-6 text-temple-800/80">Add the actual Kalyana Mantapa photos to complete this visual section.</p>
      </div>
    </div>
  );
}
