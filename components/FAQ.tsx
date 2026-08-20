'use client';
import { useState } from 'react';

export default function FAQ({
  items,
  title = 'Good to know',
  label = 'FAQ',
}: {
  items: { q: string; a: string }[];
  title?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      <div className="mb-2.5 text-[13px] uppercase tracking-[0.08em] text-accent-300">{label}</div>
      <h2 className="mb-6 text-[28px] font-medium tracking-[-0.01em] md:text-[38px]">{title}</h2>
      <div className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <div key={item.q} className="overflow-hidden rounded-md border border-divider">
            <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-[15px] font-medium">
              {item.q}
              <i className={`ph ph-plus shrink-0 text-accent-300 transition-transform ${open === i ? 'rotate-[135deg]' : ''}`} />
            </button>
            {open === i && <div className="px-5 pb-4 text-sm leading-relaxed text-muted-400">{item.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
