# Prathmesh Pawar — Portfolio

A premium, animated developer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Editing your content

Everything personal, project, skill, and timeline related lives in `src/data/`,
so you can update your real information without touching any component code:

- `src/data/portfolio.js` — name, role, tagline, email, GitHub, LinkedIn, stats, capabilities, "currently learning" badges, nav links.
- `src/data/skills.js` — skill categories and items (icons map to `lucide-react` icon names).
- `src/data/projects.js` — your projects, technologies, links, and which one is "featured".
- `src/data/journey.js` — your timeline entries.

## Notes

- Contact button uses a real `mailto:` link — no fake form.
- Custom cursor is desktop-only (disabled automatically on touch devices) and respects `prefers-reduced-motion`.
- Colors, fonts, and other design tokens are defined in `src/index.css` under `@theme`.
