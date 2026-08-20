export default function PartnerCTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-20 pt-14 md:px-16">
      <div
        className="grid grid-cols-1 items-center gap-8 rounded-lg p-10 md:grid-cols-[1.2fr_0.8fr]"
        style={{ background: 'linear-gradient(135deg, #E9EDF6, #FFFFFF)' }}
      >
        <div>
          <div className="mb-2.5 text-[13px] uppercase tracking-[0.08em] text-accent-300">Join One Fix</div>
          <h2 className="mb-3.5 text-[26px] font-medium tracking-[-0.01em] md:text-[34px]">Are you a skilled electrician, plumber or technician?</h2>
          <p className="max-w-[480px] text-base leading-relaxed text-muted-300">
            Get steady work near your area, get paid on time, and grow your business with One Fix. No fee to join.
          </p>
        </div>
        <div className="flex md:justify-end">
          <a href="tel:+923435321012" className="rounded-md bg-gradient-to-br from-accent-500 to-accent-800 px-7 py-3.5 text-[15px] text-white">
            Register as a Professional
          </a>
        </div>
      </div>
    </section>
  );
}
