'use client';
import { useState } from 'react';

const WA_NUMBER = '923435321012';
const TIME_SLOTS = ['Morning', 'Afternoon', 'Evening'];

type Option = { slug: string; name: string };

export default function BookingForm({
  services,
  defaultService,
  heading,
}: {
  services?: Option[];
  defaultService: string;
  heading?: string;
}) {
  const [selected, setSelected] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState('');

  function buildLink(fields: Record<string, string>) {
    const lines = ['Hi One Fix, I would like to book a service.', 'Service: ' + fields.service];
    if (fields.name) lines.push('Name: ' + fields.name);
    if (fields.phone) lines.push('Phone: ' + fields.phone);
    if (fields.address) lines.push('Address: ' + fields.address);
    if (fields.date) lines.push('Preferred date: ' + fields.date);
    if (fields.time) lines.push('Preferred time: ' + fields.time);
    if (fields.notes) lines.push('Notes: ' + fields.notes);
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const link = buildLink({
      service: selected,
      name: String(fd.get('name') || ''),
      phone: String(fd.get('phone') || ''),
      address: String(fd.get('address') || ''),
      date: String(fd.get('date') || ''),
      time: String(fd.get('time') || ''),
      notes: String(fd.get('notes') || ''),
    });
    window.open(link, '_blank');
    setSubmitted(true);
    setWaLink(link);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg bg-surface p-10 text-center shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-100">
          <i className="ph ph-whatsapp-logo text-2xl text-accent-300" />
        </div>
        <div className="text-xl font-medium">We opened WhatsApp for you</div>
        <div className="max-w-[360px] text-[15px] text-muted-400">
          Your booking details are ready in the message. Just hit send there and our team will confirm your slot.
        </div>
        <a href={waLink} target="_blank" rel="noreferrer" className="mt-2 rounded-md bg-gradient-to-br from-accent-500 to-accent-800 px-5 py-2.5 text-sm text-white">
          Open WhatsApp again
        </a>
        <button onClick={() => setSubmitted(false)} className="rounded-md border border-divider px-5 py-2.5 text-sm">
          Book another service
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-lg bg-surface p-8 shadow-lg">
      {heading && <div className="mb-1 text-lg font-medium">{heading}</div>}
      {services && (
        <div>
          <label className="mb-1.5 block text-xs text-ink/70">Service</label>
          <select
            className="w-full rounded-md border border-divider bg-surface px-2.5 py-2 text-sm"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {services.map((opt) => (
              <option key={opt.slug} value={opt.name}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs text-ink/70">Full name</label>
          <input className="w-full rounded-md border border-divider px-2.5 py-2 text-sm" name="name" placeholder="Your name" required />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-ink/70">Phone number</label>
          <input className="w-full rounded-md border border-divider px-2.5 py-2 text-sm" name="phone" placeholder="+92 300 0000000" required />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs text-ink/70">Address</label>
        <input className="w-full rounded-md border border-divider px-2.5 py-2 text-sm" name="address" placeholder="House, street, area, city" required />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs text-ink/70">Preferred date</label>
          <input type="date" className="w-full rounded-md border border-divider px-2.5 py-2 text-sm" name="date" required />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-ink/70">Preferred time</label>
          <div className="flex overflow-hidden rounded-md border border-divider">
            {TIME_SLOTS.map((slot, idx) => (
              <label key={slot} className={`flex-1 cursor-pointer px-3 py-2 text-center text-[13px] ${idx > 0 ? 'border-l border-divider' : ''}`}>
                <input type="radio" name="time" value={slot} className="mr-1.5" />
                {slot}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs text-ink/70">Notes (optional)</label>
        <textarea className="w-full rounded-md border border-divider px-2.5 py-2 text-sm" name="notes" rows={3} placeholder="Anything we should know?" />
      </div>
      <button
        type="submit"
        className="mt-1.5 flex items-center justify-center gap-2 rounded-md bg-gradient-to-br from-accent-500 to-accent-800 px-4 py-3.5 text-[15px] text-white"
      >
        <i className="ph ph-whatsapp-logo" /> Confirm on WhatsApp
      </button>
    </form>
  );
}
