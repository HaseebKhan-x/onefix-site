import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmartImage from '@/components/SmartImage';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';
import { SERVICES, OFFERS } from '@/lib/services-data';

const ALL = [...SERVICES, ...OFFERS];

const detailFaqs = [
  { q: 'How fast can a professional arrive?', a: 'Most repair services can be booked for the same day. Renovation and interior visits are usually scheduled within one to two days.' },
  { q: 'Are your professionals verified?', a: 'Yes. Every professional is checked, verified and trained before they join the One Fix network.' },
  { q: 'What if I am not happy with the work?', a: 'Every booking is covered by our satisfaction guarantee. Tell us within 48 hours and we will make it right, free of charge.' },
];

export function generateStaticParams() {
  return ALL.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = ALL.find((s) => s.slug === params.slug);
  if (!service) notFound();
  const isOffer = OFFERS.some((o) => o.slug === service.slug);
  const related = ALL.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <Nav variant="detail" />
      <section className="relative overflow-hidden px-5 pb-14 pt-32 md:px-16">
        <div className="relative z-[2] mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="rounded-md bg-accent-800 px-2.5 py-1 text-[11px] text-accent-100">
                {isOffer ? 'Free Visit & Consultation' : 'Verified Professionals'}
              </span>
              <div className="flex items-center gap-1 text-accent-300">
                {Array.from({ length: 5 }).map((_, s) => (
                  <i key={s} className="ph ph-star-fill text-[13px]" />
                ))}
                <span className="ml-1 text-[13px] text-muted-500">4.8 rated service</span>
              </div>
            </div>
            <h1 className="mb-4 text-[34px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[58px]">{service.name}</h1>
            <p className="mb-7 max-w-[520px] text-lg leading-relaxed text-muted-300">{service.tagline}</p>
            <div className="mb-6 flex flex-wrap gap-4">
              <a href="#book" className="rounded-md bg-gradient-to-br from-accent-500 to-accent-800 px-6 py-3.5 text-[15px] text-white">
                Book This Service
              </a>
              <a href="tel:+923149219662" className="flex items-center gap-2 rounded-md border border-divider px-6 py-3.5 text-[15px]">
                <i className="ph ph-whatsapp-logo" /> Message on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              <span className="flex items-center gap-1.5 text-[13px] text-muted-500">
                <i className="ph ph-shield-check text-accent-300" />
                Verified professional
              </span>
              <span className="flex items-center gap-1.5 text-[13px] text-muted-500">
                <i className="ph ph-clock text-accent-300" />
                Same day available
              </span>
              <span className="flex items-center gap-1.5 text-[13px] text-muted-500">
                <i className="ph ph-heart-straight text-accent-300" />
                Satisfaction guarantee
              </span>
            </div>
          </div>
          <div className="relative">
            <SmartImage id={`service-img-${service.slug}`} alt={service.name} rounded="rounded-[20px]" className="h-[420px] w-full" />
            <div className="absolute bottom-4 left-4 rounded-lg bg-paper/90 px-[18px] py-3 backdrop-blur">
              <div className="mb-0.5 text-xs text-muted-500">Starting from</div>
              <div className="text-2xl font-medium text-accent-300">{service.price}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 pb-24 md:grid-cols-[1.3fr_0.9fr] md:px-16">
        <div className="flex flex-col gap-11">
          <div>
            <h2 className="mb-3.5 text-2xl font-medium">About this service</h2>
            <p className="text-base leading-relaxed text-muted-300">{service.desc}</p>
          </div>

          <div>
            <h2 className="mb-[18px] text-[22px] font-medium">What&rsquo;s included</h2>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {service.includes.map((inc) => (
                <div key={inc} className="flex items-center gap-2.5 rounded-md border border-divider px-4 py-3.5 text-sm text-muted-200">
                  <i className="ph ph-check-circle text-accent-300" />
                  {inc}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-[18px] text-[22px] font-medium">Why book with One Fix</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3.5">
                <i className="ph ph-shield-check mt-0.5 text-xl text-accent-300" />
                <div>
                  <div className="text-sm font-medium">Verified professionals</div>
                  <div className="text-[13px] text-muted-500">Checked and trained before they visit.</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <i className="ph ph-clock mt-0.5 text-xl text-accent-300" />
                <div>
                  <div className="text-sm font-medium">Same day availability</div>
                  <div className="text-[13px] text-muted-500">Most services can be booked for today.</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <i className="ph ph-hand-coins mt-0.5 text-xl text-accent-300" />
                <div>
                  <div className="text-sm font-medium">Fair, upfront pricing</div>
                  <div className="text-[13px] text-muted-500">No hidden charges, pay once the job is done.</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <i className="ph ph-heart-straight mt-0.5 text-xl text-accent-300" />
                <div>
                  <div className="text-sm font-medium">Satisfaction guarantee</div>
                  <div className="text-[13px] text-muted-500">Not happy? We come back, free of charge.</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col items-start justify-between gap-5 rounded-lg p-7 sm:flex-row sm:items-center"
            style={{ background: 'linear-gradient(120deg, #EAF6E7, #FFFFFF)' }}
          >
            <div>
              <span className="mb-2.5 inline-flex rounded-md bg-accent-800 px-2.5 py-1 text-[11px] text-accent-100">Our Promise</span>
              <div className="mb-1.5 text-lg font-medium">Backed by our satisfaction guarantee</div>
              <div className="max-w-[380px] text-sm text-muted-400">
                Not happy with {service.name}? Tell us within 48 hours and we will send someone back to make it right, free of charge.
              </div>
            </div>
            <Link href="/#guarantee" className="whitespace-nowrap rounded-md bg-gradient-to-br from-accent-500 to-accent-800 px-5 py-3 text-sm text-white">
              Our Promise
            </Link>
          </div>

          <FAQ items={detailFaqs} title="Frequently asked" />
        </div>

        <div id="book" className="self-start md:sticky md:top-24">
          <BookingForm defaultService={service.name} heading={`Book ${service.name}`} />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-16">
        <h2 className="mb-6 text-2xl font-medium">You might also need</h2>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {related.map((rel) => (
            <div key={rel.slug} className="flex flex-col overflow-hidden rounded-lg bg-surface shadow-[0_0_0_1px_rgba(22,32,58,0.08)]">
              <SmartImage id={`rel-img-${rel.slug}`} alt={rel.name} className="h-[120px] w-full" />
              <Link href={`/services/${rel.slug}`} className="p-4 text-ink no-underline">
                <div className="text-[15px] font-medium">{rel.name}</div>
                <div className="text-[13px] text-muted-500">From {rel.price}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}
