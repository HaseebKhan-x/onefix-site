# One Fix — Next.js export

A working Next.js (App Router + TypeScript + Tailwind CSS) rebuild of the One Fix
home services site, generated from the original HTML design.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included

- `/` — homepage: hero carousel, stats, services marquee, why-us, services grid,
  renovation/interior offers, membership, how-it-works, booking form (opens
  WhatsApp with the filled-in details), testimonials, partner CTA, service
  area + FAQ.
- `/services/[slug]` — service detail page, statically generated for every
  service and offer in `lib/services-data.ts`.
- All photos that were dropped into the original design's hero/service slots
  are baked in under `public/images/` as static files (see
  `lib/image-manifest.json` for the id → file mapping used by
  `components/SmartImage.tsx`). Slots that never had a photo render a plain
  placeholder box — replace those images directly in `public/images/` and the
  manifest, or swap in your own `<Image>` calls.
- The drag-and-drop image editor from the prototype was intentionally **not**
  ported — these are plain static images, per your request.
- The service-area map is still the original Leaflet/OpenStreetMap HTML file,
  copied to `public/service-area-map.html` and embedded via an `<iframe>`. It
  needs internet access to load map tiles.
- Icons come from Phosphor's web font, loaded via CDN link in `app/layout.tsx`
  (`<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@...">`).
  Swap for the `@phosphor-icons/react` package if you'd rather not depend on
  a CDN.

## Styling

Colors, spacing, and type in `tailwind.config.ts` mirror the original design's
CSS variables (green accent, navy secondary accent, cream background). No
design-system package is wired in — this is a plain Tailwind setup.

## Not ported

- The subtle scroll-triggered reveal animations (`animation-timeline: view()`)
  from the original CSS were left out for simplicity; everything renders
  immediately instead.
- `next/image` needs a Node server or Vercel-style image optimization; if you
  plan to fully static-export (`next export`), set `images: { unoptimized: true }`
  in `next.config.mjs` first.
