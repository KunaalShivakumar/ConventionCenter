# Kashi Vishwanatha Kalyana Mantapa Website

Static Phase 1 website for Kashi Vishwanatha Kalyana Mantapa, built with React, Vite, TypeScript and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Venue Data

Venue details, pricing, facilities, FAQs and image placement are centralized in:

```text
src/data/venue.ts
```

## Image Optimization

Optimized public website copies of the venue photos are stored in:

```text
public/venue-photos/
```

To re-optimize replacement photos:

```bash
npm run optimize:images
```

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` deploys `dist` using the official GitHub Pages actions when changes are pushed to `main`.

Recommended repository setting:

```text
Settings -> Pages -> Source -> GitHub Actions
```

Vite builds with relative asset paths, so the same `dist` output works under a repository path such as `/ConventionCenter/` and under a future custom domain.

This repo also tracks the latest `dist` folder as a safety fallback because GitHub Pages may otherwise serve the raw Vite `index.html` when the repository is configured as `Deploy from a branch / main / root`. In that fallback mode, the root page redirects to `dist/` so visitors do not see a blank page.

If old photos or a blank page still appear, hard refresh the browser with Ctrl + F5 after the latest Pages run is green.
