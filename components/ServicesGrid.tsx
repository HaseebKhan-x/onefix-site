import Link from 'next/link';
import SmartImage from './SmartImage';
import { SERVICES } from '@/lib/services-data';

export default function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-[1400px] px-5 pb-20 pt-14 md:px-16">
      <div className="mb-11 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <div className="mb-2.5 text-[13px] uppercase tracking-[0.08em] text-accent-300">What we handle</div>
          <h2 className="text-[30px] font-medium tracking-[-0.01em] md:text-[44px]">Home services, on demand</h2>
        </div>
        <p className="max-w-[380px] text-[17px] text-muted-400">
          Every professional is verified and checked. Pick a service, pick a time, we show up at your door.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((svc) => (
          <div key={svc.slug} className="flex flex-col overflow-hidden rounded-lg bg-surface shadow-[0_0_0_1px_rgba(22,32,58,0.08)]">
            <SmartImage id={`svc-img-${svc.slug}`} alt={svc.name} className="h-[170px] w-full" />
            <Link href={`/services/${svc.slug}`} className="flex flex-1 flex-col gap-2 p-5 text-ink no-underline">
              <div className="text-[17px] font-medium">{svc.name}</div>
              <div className="flex-1 text-sm text-muted-400">{svc.tagline}</div>
              <div className="mt-auto flex items-center justify-between border-t border-divider pt-2.5">
                <span className="text-[13px] text-muted-500">Book now</span>
                <span className="flex items-center gap-1 text-[13px] text-accent-300">
                  Details <i className="ph ph-arrow-right" />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
