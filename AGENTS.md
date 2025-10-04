# Repository Guidelines

## Project Structure & Module Organization

Source lives in `src/`, with UI assets in `src/assets/` and components in `src/components/`. Pages are Astro files under `src/pages/`, and shared layouts reside in `src/layouts/`. Global styles are injected from `src/styles/global.css`; keep Tailwind utility overrides there if ever needed. Static files, including the favicon, sit in `public/`. Build output lands in `dist/` and should never be committed.

## Build and Development Commands

Use `npm run dev` for the local development server (hot reload on `http://localhost:4321`). Run `npm run build` before submitting changes to confirm Astro compiles cleanly. `npm run preview` serves the production build for manual QA once `dist/` has been generated. Always run `npm run format` before committing to maintain consistent code style via Prettier.

## Coding Style & Naming Conventions

All files and folders must be in kebab-case. Favor Tailwind v4 utility classes and mobile-first patterns; avoid arbitrary values unless a design token does not exist. Co-locate component-specific assets and keep shared utilities in clearly named files. Prefer semantic HTML and remove unused imports before pushing.

## Performance & Core Requirements

This is a static site with zero client-side JavaScript unless absolutely necessary. Optimize all images (use Astro's `<Image>` component with appropriate formats and sizes). Lazy-load below-the-fold content. Inline critical CSS for above-the-fold content when beneficial. Every page must achieve Lighthouse scores of 95+ across Performance, Accessibility, Best Practices, and SEO. Use semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, `<section>`) and ensure proper heading hierarchy. Include descriptive `alt` text for all images, ARIA labels where needed, and sufficient color contrast ratios (WCAG AA minimum). Generate a `sitemap.xml` and `robots.txt`. Use descriptive `<title>` and `<meta>` tags on every page. Implement Open Graph and Twitter Card metadata for social sharing. Use canonical URLs to prevent duplicate content issues.

## Testing Guidelines

No automated tests. Manual verification only: run `npm run build` to catch build errors, use `npm run preview` to verify production behavior, and validate markup with browser DevTools. Check Lighthouse scores regularly.

## Commit Guidelines

Always ensure a successful `npm run build` and `npm run format` before committing. Follow Conventional Commits (`type(scope): subject`) with lowercase, 72-character subjects—for example `feat(hero): add seasonal banner` or `fix(build): correct astro config`. Keep each commit focused, note behavioral changes or migrations in the body, and list verification commands such as `npm run build` and `npm run format` so anyone checking out the branch can replicate results quickly.
