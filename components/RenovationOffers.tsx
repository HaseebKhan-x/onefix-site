import SmartImage from './SmartImage';
import { OFFERS } from '@/lib/services-data';

export default function RenovationOffers() {
  return (
    <section id="renovation" className="bg-section px-5 py-24 md:px-16">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-14 max-w-[640px]">
          <div className="mb-2.5 text-[13px] uppercase tracking-[0.08em] text-accent-300">Featured</div>
          <h2 className="mb-3 text-[30px] font-medium tracking-[-0.01em] md:text-[44px]">Home renovation and interior design, done right</h2>
          <p className="text-[17px] text-muted-400">Start with a free visit to your home, no obligation, just a clear plan and quote.</p>
        </div>
        <div className="flex flex-col gap-16">
          {OFFERS.map((offer, i) => {
            const accent = i % 2 === 0 ? 'text-accent-300' : 'text-navy-300';
            const accentBg = i % 2 === 0 ? 'bg-accent-300' : 'bg-navy-300';
            const icon = i === 0 ? 'ph-house-line' : 'ph-armchair';
            const badge = i === 0 ? 'Renovation' : 'Interior Design';
            return (
              <div key={offer.slug} className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
                <div className={`relative ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className={`pointer-events-none absolute -left-1.5 -top-6 text-[130px] font-medium leading-none opacity-[0.07] ${accent}`}>
                    0{i + 1}
                  </div>
                  <SmartImage id={`offer-${offer.slug}`} alt={offer.name} rounded="rounded-[22px]" className="relative z-[1] h-[400px] w-full" />
                  <div className="absolute -bottom-4 left-6 z-[2] flex items-center gap-2.5 rounded-lg bg-surface px-[18px] py-3 shadow-md">
                    <i className={`ph ${icon} ${accent}`} />
                    <span className="whitespace-nowrap text-[13px] font-medium">Free Visit &amp; Consultation</span>
                  </div>
                </div>
                <div className={i % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className={`mb-4 inline-flex items-center gap-2.5 text-[13px] uppercase tracking-[0.06em] ${accent}`}>
                    <span className={`inline-block h-px w-[26px] ${accentBg}`} />
                    {badge}
                  </div>
                  <div className="mb-3.5 text-[24px] font-medium tracking-[-0.01em] md:text-[30px]">{offer.name}</div>
                  <div className="mb-6 max-w-[460px] text-base leading-relaxed text-muted-400">{offer.desc}</div>
                  <div className="mb-7 grid grid-cols-2 gap-x-5 gap-y-2.5">
                    {offer.includes.map((inc) => (
                      <div key={inc} className="flex items-center gap-2 text-sm text-muted-300">
                        <i className={`ph ph-check-circle ${accent}`} />
                        {inc}
                      </div>
                    ))}
                  </div>
                  <a href="#book" className="inline-block rounded-md bg-gradient-to-br from-accent-500 to-accent-800 px-6 py-3.5 text-sm text-white">
                    Book Free Consultation
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
