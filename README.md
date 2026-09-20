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

For repository project pages, Vite automatically uses the repository name as the base path in GitHub Actions. For a future custom domain, set:

```text
VITE_BASE_PATH=/
```

If old upside-down photos still appear while testing locally, hard refresh the browser. The website photo URLs include a version query so deployed visitors receive the corrected upright images.
