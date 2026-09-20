type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, children, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-rose">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {children ? <div className="mt-4 text-base leading-7 text-stone-700 sm:text-lg">{children}</div> : null}
    </div>
  );
}
