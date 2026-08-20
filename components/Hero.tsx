'use client';
import { useEffect, useRef, useState } from 'react';
import SmartImage from './SmartImage';

const slides = [
  {
    imgId: 'hero-slide-main',
    kicker: 'Verified pros in Lahore, Karachi and Islamabad',
    title: 'One team for every home job, big or small',
    sub: 'Electricians, plumbers, appliance repair and full home renovation, all booked in a few minutes.',
    ctaLabel: 'Book a Service',
    ctaHref: '#book',
    secondaryLabel: 'View Services',
    secondaryHref: '#services',
  },
  {
    imgId: 'hero-slide-renovation',
    kicker: 'Free visit and consultation',
    title: 'Home renovation and interior design, done right',
    sub: 'Start with a free visit, no obligation, just a clear plan and quote.',
    ctaLabel: 'Book Free Consultation',
    ctaHref: '#renovation',
    secondaryLabel: '',
    secondaryHref: '',
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
  };
  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);
  const goTo = (n: number) => {
    setI((n + slides.length) % slides.length);
    restart();
  };

  return (
    <section id="top" className="relative">
      <div className="relative h-[78vh] max-h-[620px] min-h-[460px] overflow-hidden">
        {slides.map((s, idx) => (
          <div
            key={s.imgId}
            className="absolute inset-0 flex flex-col transition-opacity duration-[900ms] md:flex-row"
            style={{ opacity: idx === i ? 1 : 0, zIndex: idx === i ? 2 : 1 }}
          >
            <div className="flex shrink-0 items-center bg-gradient-to-br from-[#16203A] to-[#223357] px-6 py-7 md:w-[44%] md:min-w-[320px] md:px-14 md:py-0">
              <div className="max-w-[460px] text-white">
                <div className="mb-5 inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-white/15 px-3.5 py-1.5 text-xs backdrop-blur">
                  {s.kicker}
                </div>
                <h1 className="mb-4 text-[26px] font-medium leading-[1.12] tracking-[-0.02em] md:text-[44px]">{s.title}</h1>
                <p className="mb-6 max-w-[420px] text-base leading-relaxed text-white/85">{s.sub}</p>
                <div className="flex flex-wrap gap-3">
                  <a href={s.ctaHref} className="whitespace-nowrap rounded-md bg-gradient-to-br from-accent-500 to-accent-800 px-5 py-3 text-sm text-white">
                    {s.ctaLabel}
                  </a>
                  {s.secondaryLabel && (
                    <a href={s.secondaryHref} className="whitespace-nowrap rounded-md border border-white/50 px-5 py-3 text-sm text-white">
                      {s.secondaryLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="relative min-h-[200px] flex-1 overflow-hidden">
              <SmartImage id={s.imgId} alt={s.title} className="h-full w-full" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#16203A]/30 to-transparent" />
            </div>
          </div>
        ))}
        <button
          aria-label="Previous slide"
          onClick={() => goTo(i - 1)}
          className="absolute left-4 top-1/2 z-[3] flex h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur"
        >
          <i className="ph ph-caret-left" />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => goTo(i + 1)}
          className="absolute right-4 top-1/2 z-[3] flex h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur"
        >
          <i className="ph ph-caret-right" />
        </button>
        <div className="absolute bottom-5 left-0 right-0 z-[3] flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label="Go to slide"
              onClick={() => goTo(idx)}
              className="h-2 w-2 rounded-full border border-black/40"
              style={{ background: idx === i ? '#fff' : 'rgba(10,16,30,0.45)' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
