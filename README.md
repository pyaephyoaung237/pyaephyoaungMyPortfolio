# Portfolio (React + Tailwind CSS)

A responsive, component-based portfolio site: white background, black body text,
navy blue accents/buttons, and a dark navy "Achievement" section. Skills,
Education, and Experience animate in as you scroll (IntersectionObserver-based,
respects `prefers-reduced-motion`).

## Structure

```
src/
  data.js                  ← all your content lives here (name, skills, jobs, etc.)
  App.jsx                  ← assembles every section
  index.css                ← Tailwind + scroll-reveal animation classes
  hooks/
    useScrollAnimation.js  ← reusable scroll-into-view hook
  components/
    Navbar.jsx
    Hero.jsx          (Home)
    About.jsx
    Skills.jsx
    Education.jsx
    Work.jsx
    Experience.jsx
    Achievement.jsx
    Footer.jsx
```

## Getting started

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Customize

- Edit `src/data.js` to swap in your real name, bio, contact info, skills,
  schools, jobs, and achievements — every component reads from this one file.
- Colors live in `tailwind.config.js` under `theme.extend.colors.navy` if you
  want to shift the navy shade.
- Scroll animation feel (distance, duration, delay) lives in `src/index.css`
  under the `.reveal*` classes, and stagger timing is set per-card via the
  inline `transitionDelay` in `Skills.jsx`, `Work.jsx`, and `Achievement.jsx`.

## Responsive behavior

- Below `md` (768px): single-column stacked layout, hamburger nav menu,
  2-column skill/achievement grids.
- `md` and up: multi-column grids, alternating left/right Education and
  Experience timeline, full horizontal nav.
