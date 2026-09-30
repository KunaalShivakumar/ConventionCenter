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

Vite builds for the custom domain at the root path `/`, so the deployed GitHub Pages artifact is intended to be served from `https://www.kashivishwanathaconventioncenter.com/`.

This repo also tracks the latest `dist` folder as a safety fallback because GitHub Pages may otherwise serve the raw Vite `index.html` when the repository is configured as `Deploy from a branch / main / root`. In that fallback mode, the root page redirects GitHub-hosted traffic to the custom domain so visitors land on the canonical website.

If old photos or a blank page still appear, hard refresh the browser with Ctrl + F5 after the latest Pages run is green.
