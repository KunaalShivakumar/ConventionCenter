import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { venue } from '../data/venue';
import { ButtonLink } from './ButtonLink';

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Facilities', '#facilities'],
  ['Gallery', '#gallery'],
  ['Pricing', '#pricing'],
  ['Location', '#location'],
  ['Contact', '#contact']
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-temple-900/10 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="max-w-[15rem] font-serif text-lg font-semibold leading-tight text-temple-900 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-700">
          {venue.name}
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-stone-700 transition hover:text-temple-800 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-700">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <ButtonLink href={venue.phoneHref} aria-label={`Call ${venue.phoneDisplay} to check availability`}>
            <Phone size={18} aria-hidden="true" />
            Call to Check Availability
          </ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-temple-900/15 text-temple-900 lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-temple-900/10 bg-temple-50 px-4 py-4 shadow-soft lg:hidden">
          <div className="grid gap-2">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-stone-800 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-temple-700">
                {label}
              </a>
            ))}
            <ButtonLink href={venue.phoneHref} className="mt-2" aria-label={`Call ${venue.phoneDisplay} to check availability`}>
              <Phone size={18} aria-hidden="true" />
              Call to Check Availability
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
