# Ursitoare Web

Angular landing page for Ursitoarele Fermecătoare.

## Run locally

```bash
npm install
npm start
```

Create a production build:

```bash
npm run build
```

## Project structure

- `src/app/content/site-content.ts` — centralized Romanian copy and accessible labels for every page section.
- `src/app/features/home/` — homepage feature and section layout.
- `src/app/shared/components/` — shared header and footer components.
- `src/styles/theme.css` — central color, typography, and shadow tokens.
- `public/assets/` — images used by the application.

Update user-facing copy in `site-content.ts`. Keep Angular templates focused on layout and bindings.
