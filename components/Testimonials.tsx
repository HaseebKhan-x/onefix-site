'use client';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  { quote: 'The electrician came within two hours and fixed the wiring properly. No shortcuts, fair price.', name: 'Ahmed Raza', service: 'Electrical Services', initials: 'AR' },
  { quote: 'We used One Fix for our full kitchen renovation. One team, one point of contact, no stress at all.', name: 'Sana Malik', service: 'Home Renovation', initials: 'SM' },
  { quote: 'Booked a plumber and solar panel cleaning together. Both arrived on time and did clean work.', name: 'Bilal Khan', service: 'Plumbing and Solar', initials: 'BK' },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const restart = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
  };
  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);
  const goTo = (n: number) => {
    setI((n + testimonials.length) % testimonials.length);
    restart();
  };

  return (
    <section id="reviews" className="mx-auto max-w-[1400px] px-5 py-24 md:px-16">
      <div className="mb-11 text-center">
        <div className="mb-2.5 text-[13px] uppercase tracking-[0.08em] text-accent-300">Reviews</div>
        <h2 className="text-[30px] font-medium tracking-[-0.01em] md:text-[44px]">Neighbours who trust us</h2>
      </div>
      <div className="relative mx-auto max-w-[720px]">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${i * 100}%)` }}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="w-full shrink-0 p-1">
                <div className="flex flex-col items-center gap-4 rounded-lg bg-surface p-10 text-center shadow-[0_0_0_1px_rgba(22,32,58,0.08)]">
                  <div className="flex gap-1 text-accent-300">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <i key={s} className="ph ph-star-fill text-sm" />
                    ))}
                  </div>
                  <div className="max-w-[520px] text-lg leading-relaxed text-muted-200">&ldquo;{t.quote}&rdquo;</div>
                  <div className="flex items-center gap-2.5 border-t border-divider pt-3.5">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full text-sm text-white"
                      style={{ background: idx % 2 === 0 ? '#25772D' : '#2C4373' }}
                    >
                      {t.initials}
                    </div>
                    <div className="text-left">
                      <div className="text-[13px] font-medium">{t.name}</div>
                      <div className="text-xs text-muted-500">{t.service}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="Previous review"
          onClick={() => goTo(i - 1)}
          className="absolute -left-[52px] top-1/2 hidden h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full bg-muted-200 text-white lg:flex"
        >
          <i className="ph ph-caret-left" />
        </button>
        <button
          aria-label="Next review"
          onClick={() => goTo(i + 1)}
          className="absolute -right-[52px] top-1/2 hidden h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full bg-muted-200 text-white lg:flex"
        >
          <i className="ph ph-caret-right" />
        </button>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label="Go to review"
              onClick={() => goTo(idx)}
              className="h-2 w-2 rounded-full"
              style={{ background: idx === i ? '#4C9B32' : 'rgba(22,32,58,0.12)' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
