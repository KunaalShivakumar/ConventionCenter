import { MapPinned, MessageCircle, Phone } from 'lucide-react';
import { venue } from '../data/venue';

export function BottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-temple-900/10 bg-white/96 p-2 shadow-[0_-14px_34px_rgba(31,26,23,0.18)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href={venue.phoneHref} className="col-span-2 flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-gradient-to-r from-rose via-temple-600 to-temple-500 px-3 py-3 text-sm font-bold text-white shadow-soft">
          <Phone size={18} aria-hidden="true" />
          Call to Check Availability
        </a>
        <a href={venue.whatsappUrl} target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center gap-1 rounded-md border border-temple-700/20 bg-temple-50 px-2 text-sm font-semibold text-temple-800">
          <MessageCircle size={17} aria-hidden="true" />
          WhatsApp
        </a>
        <a href={venue.mapsUrl} target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center gap-1 rounded-md border border-temple-700/20 bg-temple-50 px-2 text-sm font-semibold text-temple-800">
          <MapPinned size={17} aria-hidden="true" />
          Directions
        </a>
      </div>
    </div>
  );
}
