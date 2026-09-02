# Jonattan Lima — Portfolio

Personal portfolio for Jonattan Lima, focused on communicating his experience as a Backend Developer and Data Engineer. The site is designed for job searching and professional networking.

## Purpose

The portfolio presents Jonattan's professional profile, experience, selected projects, formal education, courses, certifications, and contact channels in a simple one-page experience.

## Technology

- React
- Vite
- JavaScript
- CSS
- Static assets bundled by Vite
- Font Awesome React with individually imported solid and brand icons

No backend or database is required. The application is a static site and can be hosted on any platform that serves the generated `dist/` directory.

## Features

- Responsive one-page layout for desktop and mobile
- Full-viewport hero section
- Animated Backend Developer / Data Engineer role label
- Reduced-motion support and hover pause behavior
- Spanish and English content with browser-language detection
- Manual `ES / EN` language switch
- Developer CV download selected by the active language
- Copyable email with visual feedback
- LinkedIn and GitHub links
- Experience, projects, education, certifications, and contact sections
- Dark professional visual design with orange accents
- Font Awesome icons for actions, social links, technologies, experience, projects, and certifications
- Semantic markup, keyboard focus states, and accessible labels

## Requirements

- Node.js 18 or newer
- npm

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Production build

Create an optimized production build:

```bash
npm run build
```

The output is generated in `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project can be deployed to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or another static hosting provider.

General deployment settings:

1. Connect the GitHub repository to the hosting provider.
2. Use `npm install` as the install command.
3. Use `npm run build` as the build command.
4. Set `dist` as the publish/output directory.
5. Deploy the site.

The photo and CV files are imported from `resources/` and copied into the production bundle by Vite, so the directory must remain in the repository.

## Content updates

Most portfolio content and translations are defined in `src/main.jsx`. Project descriptions are intentionally concise until their final descriptions, technologies, and impact metrics are added.

CV files are stored in:

```text
resources/cv/
```

The initial version uses the Developer CV in English or Spanish according to the active language.
