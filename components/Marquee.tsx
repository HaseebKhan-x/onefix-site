import { SERVICES, OFFERS } from '@/lib/services-data';

const all = [...SERVICES, ...OFFERS];
const items = [...all, ...all];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden px-5 pb-6 pt-5 md:px-16"
      style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}
    >
      <div className="flex w-max animate-marquee gap-3.5">
        {items.map((svc, idx) => (
          <a
            key={svc.slug + idx}
            href={`/services/${svc.slug}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-divider bg-surface/60 px-[18px] py-2.5 text-sm text-muted-300"
          >
            <i className={`ph ${svc.icon} text-accent-300`} /> {svc.name}
          </a>
        ))}
      </div>
    </div>
  );
}
