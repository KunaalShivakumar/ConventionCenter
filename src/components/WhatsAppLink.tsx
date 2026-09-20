import { MessageCircle } from 'lucide-react';
import { venue } from '../data/venue';
import { ButtonLink } from './ButtonLink';

type WhatsAppLinkProps = {
  variant?: 'primary' | 'secondary' | 'quiet' | 'light';
  className?: string;
  label?: string;
};

export function WhatsAppLink({ variant = 'secondary', className, label = 'WhatsApp Us' }: WhatsAppLinkProps) {
  return (
    <ButtonLink href={venue.whatsappUrl} target="_blank" rel="noreferrer" variant={variant} className={className}>
      <MessageCircle aria-hidden="true" size={18} />
      {label}
    </ButtonLink>
  );
}
