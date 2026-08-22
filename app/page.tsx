import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Marquee from '@/components/Marquee';
import WhyUs from '@/components/WhyUs';
import ServicesGrid from '@/components/ServicesGrid';
import RenovationOffers from '@/components/RenovationOffers';
import Membership from '@/components/Membership';
import HowItWorks from '@/components/HowItWorks';
import BookingForm from '@/components/BookingForm';
import Testimonials from '@/components/Testimonials';
import PartnerCTA from '@/components/PartnerCTA';
import ServiceArea from '@/components/ServiceArea';
import FAQ from '@/components/FAQ';
import { SERVICES, OFFERS } from '@/lib/services-data';

const homeFaqs = [
  { q: 'How fast can a professional arrive?', a: 'Most repair services like electrical, plumbing and appliance work can be booked for the same day. Renovation and interior visits are usually scheduled within one to two days.' },
  { q: 'Are your professionals verified?', a: 'Yes. Every professional is checked, verified and trained before they join the One Fix network.' },
  { q: 'Is the renovation consultation really free?', a: 'Yes, the first visit and quote for home renovation or interior design is completely free with no obligation to go ahead.' },
  { q: 'Is there a guarantee on the work?', a: 'Yes. Every booking is covered by our satisfaction guarantee. Tell us within 48 hours and we will send someone back to make it right, free of charge.' },
  { q: 'How do I pay?', a: 'Cash, easypaisa, jazzcash or card, paid directly once the job is done to your satisfaction. Renovation projects are billed by milestone.' },
];

export default function HomePage() {
  const bookable = [...SERVICES, ...OFFERS].map((s) => ({ slug: s.slug, name: s.name }));
  return (
    <>
      <Nav variant="home" />
      <Hero />
      <Stats />
      <Marquee />
      <WhyUs />
      <ServicesGrid />
      <RenovationOffers />
      <Membership />
      <HowItWorks />
      <section id="book" className="bg-surface/40 px-5 py-24 md:px-16">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-2.5 text-[13px] uppercase tracking-[0.08em] text-accent-300">Book a service</div>
            <h2 className="mb-4 text-[30px] font-medium tracking-[-0.01em] md:text-[44px]">Tell us what you need</h2>
            <p className="mb-8 max-w-[440px] text-[17px] leading-relaxed text-muted-400">
              Fill this in, hit confirm, and it opens WhatsApp with your details ready to send to our team.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3.5">
                <i className="ph ph-clock mt-0.5 text-xl text-accent-300" />
                <div>
                  <div className="text-sm font-medium">7 AM to 10 PM, every day</div>
                  <div className="text-[13px] text-muted-500">Same day slots for most services</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <i className="ph ph-map-pin mt-0.5 text-xl text-accent-300" />
                <div>
                  <div className="text-sm font-medium">Serving residents of Jinnah Garden and Naval Anchorage and more</div>
                  <div className="text-[13px] text-muted-500">See full coverage in the service area below</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <i className="ph ph-whatsapp-logo mt-0.5 text-xl text-accent-300" />
                <div>
                  <div className="text-sm font-medium">+92 314 9219662</div>
                  <div className="text-[13px] text-muted-500">Call or message us on WhatsApp anytime</div>
                </div>
              </div>
            </div>
          </div>
          <BookingForm services={bookable} defaultService="Electrical Services" />
        </div>
      </section>
      <Testimonials />
      <PartnerCTA />
      <section id="faq" className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-16">
        <ServiceArea />
        <FAQ items={homeFaqs} />
      </section>
      <Footer variant="full" />
    </>
  );
}
