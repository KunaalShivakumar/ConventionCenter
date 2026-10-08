import { Camera } from 'lucide-react';
import type { VenueImage } from '../data/venue';
import { classNames } from '../utils/classNames';

type PhotoPanelProps = {
  image?: VenueImage;
  className?: string;
  label?: string;
  sizes?: string;
};

type ResponsiveVenueImageProps = {
  image: VenueImage;
  className?: string;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

export function ResponsiveVenueImage({
  image,
  className,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  loading,
  fetchPriority
}: ResponsiveVenueImageProps) {
  return (
    <picture className="contents">
      <source type="image/webp" srcSet={image.webpSrcSet} sizes={sizes} />
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        className={classNames('photo-polish', className)}
        loading={loading ?? (image.featured ? 'eager' : 'lazy')}
        fetchPriority={fetchPriority ?? (image.featured ? 'high' : 'auto')}
        decoding="async"
      />
    </picture>
  );
}

export function PhotoPanel({ image, className, label = 'Venue photography', sizes }: PhotoPanelProps) {
  if (image) {
    return (
      <ResponsiveVenueImage
        image={image}
        className={classNames('h-full w-full object-cover', className)}
        sizes={sizes}
        loading={image.featured ? 'eager' : 'lazy'}
        fetchPriority={image.featured ? 'high' : 'auto'}
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
