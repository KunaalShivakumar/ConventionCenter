import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../utils/classNames';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'quiet' | 'light' | 'gold';
};

export function ButtonLink({ children, className, variant = 'primary', ...props }: ButtonLinkProps) {
  const variants = {
    primary:
      'bg-gradient-to-r from-rose via-temple-600 to-temple-500 text-white shadow-soft hover:brightness-110 focus-visible:outline-temple-300',
    secondary:
      'border border-temple-700/25 bg-white text-temple-800 shadow-sm hover:border-temple-700 hover:bg-temple-50 focus-visible:outline-temple-700',
    quiet:
      'bg-transparent text-temple-800 hover:bg-temple-50 focus-visible:outline-temple-700',
    light:
      'border border-white/45 bg-white/18 text-white shadow-sm backdrop-blur hover:bg-white/28 focus-visible:outline-white',
    gold:
      'border border-white/45 bg-temple-200 text-ink shadow-[0_18px_46px_rgba(0,0,0,0.28)] hover:bg-white focus-visible:outline-temple-100'
  };

  return (
    <a
      className={classNames(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
