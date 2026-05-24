# Haoyang Jiang — Personal Homepage

A deployable Vite + React + Tailwind personal academic homepage for Haoyang Jiang.

## Features

- White, clean research homepage design
- Personal hero photo from `public/profile.svg`
- Research, projects, publications, and contact sections
- No external icon package dependency; icons are inline SVG React components
- Vitest test coverage for rendering, navigation data, profile photo, and scrolling helper
- GitHub Pages workflow included

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Test

```bash
npm test
```

## Deploy options

### Option A: Vercel

1. Log in to Vercel with GitHub.
2. Import this repository.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Option B: GitHub Pages

This repository includes `.github/workflows/deploy.yml`. After pushing to `main`, enable GitHub Pages from Actions in repository settings if needed.

Because this repo is named `Data`, Vite uses `/Data/` as the GitHub Pages base path when building inside GitHub Actions.

## Customize links

Edit `src/App.jsx`:

- Replace the `#` link for LinkedIn.
- Replace the `#` link for Google Scholar.
- Replace the CV button link with a real PDF path, for example `/cv.pdf`.
