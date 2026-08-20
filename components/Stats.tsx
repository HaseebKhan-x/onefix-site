'use client';
import { useEffect, useState } from 'react';

const targets = [500, 50, 4.8, 24];
const suffix = ['+', '+', '', '/7'];
const labels = ['Homes served', 'Verified pros', 'Average rating', 'Support'];

export default function Stats() {
  const [vals, setVals] = useState([0, 0, 0, 0]);
  useEffect(() => {
    const start = performance.now();
    const duration = 1200;
    let raf: number;
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVals(targets.map((v) => v * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-10 border-b border-divider px-5 py-8 md:px-16">
      {targets.map((_, idx) => (
        <div key={idx} className="text-center">
          <div className="text-[26px] font-medium">{(idx === 2 ? vals[idx].toFixed(1) : Math.round(vals[idx])) + suffix[idx]}</div>
          <div className="mt-0.5 text-[13px] text-muted-500">{labels[idx]}</div>
        </div>
      ))}
    </div>
  );
}
