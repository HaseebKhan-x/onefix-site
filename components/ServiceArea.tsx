const areas = ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan'];

export default function ServiceArea() {
  return (
    <div>
      <div className="mb-2.5 text-[13px] uppercase tracking-[0.08em] text-navy-300">Service area</div>
      <h2 className="mb-5 text-[28px] font-medium tracking-[-0.01em] md:text-[38px]">Where we operate</h2>
      <iframe
        src="/service-area-map.html"
        loading="lazy"
        title="Map highlighting Jinnah Garden and Naval Anchorage"
        className="mb-5 block h-[260px] w-full rounded-lg border border-divider"
      />
      <div className="flex flex-wrap gap-2.5">
        {areas.map((area) => (
          <span key={area} className="rounded-md border border-accent-300 px-3 py-1 text-[13px] text-accent-300">
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}
