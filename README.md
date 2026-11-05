# Muhammad Saad Alam — Portfolio

Personal portfolio built with React 18, Create React App, and custom responsive CSS. Hosted through the existing GitHub Pages workflow.

## Local development

```sh
npm ci
npm start
```

Open http://localhost:3000. For a production build, run `npm run build`.

## Content and assets

- `src/data/profile.js`: contact details, CV link, Tollan hub, and experience.
- `src/data/projects.json`: existing game catalogue and store/video links.
- `src/components/`: homepage sections, project filters, and native video dialog.
- `src/index.css`: responsive layout, palette, typography, and reduced-motion support.
- `public/saad-alam.webp`: optimized version of the supplied updated portrait.
- `New/`: original user-supplied CV, LinkedIn export, and portrait; reference material only, not copied into the public build.

The CV buttons open the Google Drive URL supplied by the portfolio owner. Contact uses mailto and a clipboard button; no messages are submitted or stored by the website. Videos are embedded from the existing Google Drive links, with a direct-link fallback.

## Content review

The CV and LinkedIn export supplied in `New/` were used to update the professional summary, work history, toolkit, education, backend case study, and independent project. Duplicate roles in the LinkedIn export are displayed once. Experience is described as "since 2017" instead of conflicting year totals. Unverified ratings, player counts, prize-pool claims, skill percentages, and placeholder GitHub links were removed. No home address or birthday is published in the page.

Original PDF contents are unchanged. The LinkedIn export contains duplicate Tollan and Big Wolf roles; those should be reviewed on LinkedIn. The CV summary also contains an extra standalone period. The linked Drive CV is controlled separately from this repository.

## Checks

```sh
npm run build
npm test -- --watchAll=false
```

The browser integration tests require Playwright, installed separately from application dependencies. The GitHub workflow deploys pushes to `main`; local edits do not publish automatically.
