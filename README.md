# Devika Raj Batra — Portfolio

React + TypeScript + Vite. No animation libraries; all motion is CSS + small hooks.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Where things live

- `src/data.ts` — all copy, links, stats, honours, articles, gallery. Edit content here.
- `src/App.tsx` — routes (`PAGES`), page transitions, nav, home "Selected work" grid, next-page link.
- `src/sections.tsx` — the content sections used by each page.
- `src/nav.ts` — header links.
- `src/fx.tsx` — animated components (split-text, counters, cursor, magnetic, tilt, YouTube facade, loop video).
- `src/hooks.ts` — scroll reveal observer, parallax (`data-speed`), progress bar, nav hide/show.
- `src/index.css` — design tokens and all styles.
- `public/media/` — optimised images and videos (originals stay in `data/`).

## Pages

`/` home · `/amrit` · `/film` · `/research` · `/leadership` · `/arts` · `/voice`. Routing is client-side; `public/_redirects` (Netlify) and `vercel.json` (Vercel) send every path to `index.html`.
