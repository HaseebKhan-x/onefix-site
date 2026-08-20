export default function Membership() {
  return (
    <section id="guarantee" className="mx-auto max-w-[1200px] px-5 py-24 text-center md:px-16">
      <div className="mb-9">
        <div className="mb-2.5 text-[13px] uppercase tracking-[0.08em] text-accent-300">Our Promise</div>
        <h2 className="mb-3 text-[30px] font-medium tracking-[-0.01em] md:text-[44px]">One team, one standard, every time</h2>
        <p className="mx-auto max-w-[520px] text-[17px] text-muted-400">
          No matter the job, you get the same verified professionals, fair pricing and a guarantee we stand behind.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg shadow-md" style={{ background: 'linear-gradient(120deg, #EAF6E7, #FFFFFF)' }}>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #4C9B32, #223357)' }} />
        <div className="grid grid-cols-1 items-center gap-6 p-10 text-left md:grid-cols-[1.4fr_auto]">
          <div>
            <span className="mb-3.5 inline-flex rounded-md bg-accent-800 px-2.5 py-1 text-[11px] text-accent-100">One Fix Promise</span>
            <div className="mb-2.5 text-[26px] font-medium">Booked once, trusted every time</div>
            <p className="mb-5 max-w-[500px] text-base leading-relaxed text-muted-400">
              Every visit is handled by a verified, background-checked professional with fair, upfront pricing agreed before work starts, no surprises.
            </p>
            <div className="flex flex-wrap gap-5">
              <span className="flex items-center gap-2 text-[13px] text-muted-300">
                <i className="ph ph-shield-check text-accent-300" />
                Verified, background-checked pros
              </span>
              <span className="flex items-center gap-2 text-[13px] text-muted-300">
                <i className="ph ph-hand-coins text-navy-300" />
                Fair, upfront pricing
              </span>
              <span className="flex items-center gap-2 text-[13px] text-muted-300">
                <i className="ph ph-heart-straight text-accent-300" />
                Satisfaction guaranteed, free re-visit
              </span>
            </div>
          </div>
          <div className="text-left md:text-right">
            <div className="text-[22px] font-medium text-accent-300">100% Satisfaction<br />Guaranteed</div>
            <a href="#book" className="mt-3 inline-block rounded-md bg-gradient-to-br from-accent-500 to-accent-800 px-5 py-3 text-sm text-white">
              Book a Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
