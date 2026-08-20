const items = [
  { icon: 'ph-shield-check', title: 'Verified professionals', desc: 'Every professional is background checked and trained before they visit your home.' },
  { icon: 'ph-clock', title: 'Same day service', desc: 'Book in the morning, get it fixed by evening for most repair jobs.' },
  { icon: 'ph-hand-coins', title: 'Fair, upfront pricing', desc: 'No hidden charges. You know the price before the work starts.' },
  { icon: 'ph-heart-straight', title: 'Satisfaction guarantee', desc: 'Not happy with the work? We come back and fix it, free of charge.' },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-20 md:px-16">
      <div className="mb-10">
        <div className="mb-2.5 text-[13px] uppercase tracking-[0.08em] text-accent-300">Why people choose us</div>
        <h2 className="max-w-[640px] text-[28px] font-medium tracking-[-0.01em] md:text-[40px]">Home services you can actually rely on</h2>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-lg bg-surface p-6 shadow-[0_0_0_1px_rgba(22,32,58,0.08)] transition-transform hover:-translate-y-1">
            <i className={`ph ${item.icon} mb-4 block text-[26px] text-accent-300`} />
            <div className="mb-1.5 text-base font-medium">{item.title}</div>
            <div className="text-[15px] leading-relaxed text-muted-400">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
