# Repository Guidelines

## Project Structure & Module Organization

Source lives in `src/`, with UI assets in `src/assets/` and components in `src/components/`. Pages are Astro files under `src/pages/`, and shared layouts reside in `src/layouts/`. Global styles are injected from `src/styles/global.css`; keep Tailwind utility overrides there if ever needed. Static files, including the favicon, sit in `public/`. Build output lands in `dist/` and should never be committed.

## Build and Development Commands

Use `npm run dev` for the local development server (hot reload on `http://localhost:4321`). Run `npm run build` before submitting changes to confirm Astro compiles cleanly. `npm run preview` serves the production build for manual QA once `dist/` has been generated.

## Coding Style & Naming Conventions

Astro components should be formatted with two-space indentation and lowercase-kebab filenames (`Welcome.astro` is the exception kept for legacy parity). Favor Tailwind v4 utility classes and mobile-first patterns; avoid arbitrary values unless a design token does not exist. Co-locate component-specific assets and keep shared utilities in clearly named files. Prefer semantic HTML and remove unused imports before pushing.

## Testing Guidelines

This project is basic and has no tests. Do no try to add tests or propose to add and run them.

## Commit Guidelines

Always ensure a successful `npm run build` and `npm run format` before committing. Follow Conventional Commits (`type(scope): subject`) with lowercase, 72-character subjects—for example `feat(hero): add seasonal banner` or `fix(build): correct astro config`. Keep each commit focused, note behavioral changes or migrations in the body, and list verification commands such as `npm run build` and `npm run format` so anyone checking out the branch can replicate results quickly.
