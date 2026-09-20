import { venue } from '../data/venue';
import { SectionHeader } from '../components/SectionHeader';

export function FAQ() {
  return (
    <section className="section-fresh py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" align="center" />
        <div className="mt-10 divide-y divide-temple-900/10 rounded-lg border border-temple-900/10 bg-white/90 shadow-soft">
          {venue.faqs.map((faq) => (
            <details key={faq.question} className="group p-5 open:bg-temple-50/60">
              <summary className="cursor-pointer list-none font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-700">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-xl text-rose group-open:rotate-45" aria-hidden="true">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-stone-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
