const steps = [
  { n: 1, title: 'Choose a service', desc: 'Pick from repairs, daily essentials, or a full renovation consult.' },
  { n: 2, title: 'Pick a slot', desc: 'Choose a date and time that works for you, often the same day.' },
  { n: 3, title: 'We show up', desc: 'A verified professional arrives on time, ready to work.' },
  { n: 4, title: 'Pay and review', desc: 'Pay once the job is done and rate your experience.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[1400px] px-5 py-24 md:px-16">
      <div className="mb-12">
        <div className="mb-2.5 text-[13px] uppercase tracking-[0.08em] text-accent-300">How it works</div>
        <h2 className="text-[30px] font-medium tracking-[-0.01em] md:text-[44px]">Four steps, that is it</h2>
      </div>
      <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
        <div
          className="absolute left-0 right-0 top-[22px] hidden h-px md:block"
          style={{ background: 'linear-gradient(90deg, transparent, #327022 15%, #327022 85%, transparent)' }}
        />
        {steps.map((step) => (
          <div key={step.n} className="relative z-[1]">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-accent-700 bg-paper font-medium text-accent-300">
              {step.n}
            </div>
            <div className="mb-2 text-lg font-medium">{step.title}</div>
            <div className="text-[15px] leading-relaxed text-muted-400">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
