![Deploy](https://github.com/guillaumecrespel/website/actions/workflows/fly-deploy.yml/badge.svg)

# guillaumecrespel.fr

Personal site and resume of Guillaume Crespel: custom business apps for small companies (as a
subscription) and freelance C(P)TO missions for startups and large companies. French and English.

## Stack

- **Astro 7**, fully static, **zero framework JavaScript** on the client (one ~2 KB script for the
  theme toggle, the mobile menu and a few enhancements).
- **Tailwind CSS 4** with a small neo-brutalist design system in `src/styles/global.css`.
- Native platform features instead of libraries: `<dialog>` + invoker commands for the sheets,
  the Popover API for the mobile menu, `<details>` for the timeline and FAQ, View Transitions for
  the theme switch, scroll-driven CSS for the header.
- **astro-icon** (Iconify sets inlined at build time, deduplicated as SVG symbols).
- Self-hosted **Space Grotesk** variable font through Astro's Fonts API.
- **Biome** for lint and format, `astro check` for types.

## Content

Everything is data-driven and shared by the home page, the online resume, the PDF and `llms.txt`:

| What                                          | Where                                                           |
| --------------------------------------------- | --------------------------------------------------------------- |
| UI copy, FAQ, SMB offer, meta tags            | `src/i18n/locales/{fr,en}/ui.json`                              |
| Experiences (one file per mission)            | `src/i18n/data/experiences/{fr,en}/`                            |
| Technology ↔ mission mapping                  | `src/i18n/data/experiences/technology-mapping.ts`               |
| Technologies list                             | `src/i18n/data/technologies.ts` + `locales/*/technologies.json` |
| SaaS products, freelance offers, sectors      | `src/i18n/data/{saas,offers,sectors}.ts`                        |
| Profile, social links, optional public e-mail | `src/i18n/data/profile.ts`                                      |

Durations ("1 year 11 months"), years of experience, seniority per technology and key figures are
computed at build time from the mission dates: rebuild to refresh them.

## Pages

| URL                                    | Purpose                                                       |
| -------------------------------------- | ------------------------------------------------------------- |
| `/`                                    | Language negotiation (302 by nginx from `Accept-Language`)    |
| `/fr/`, `/en/`                         | Home page                                                     |
| `/fr/cv/`, `/en/cv/`                   | Printable resume, source of the PDFs                          |
| `/cv/guillaume_crespel_cv_{fr,en}.pdf` | Generated PDFs (committed)                                    |
| `/llms.txt`, `/llms-full.txt`          | Markdown brief for AI assistants (generated)                  |
| `/og/{fr,en}/`                         | Social card templates (noindex, screenshotted to `/og/*.png`) |

## SEO / GEO

- Per-language `<title>`, description, canonical, `hreflang` (fr-FR, en-US, x-default), Open Graph
  and Twitter cards with a dedicated 1200×630 image per language.
- JSON-LD graph: `WebSite`, `ProfilePage`, `Person` (sameAs, address, knowsAbout, occupation),
  `SoftwareApplication` for each product, `FAQPage`.
- Sitemap with i18n alternates, `robots.txt` open to search engines and AI crawlers, `llms.txt`.
- All content (timeline, technologies, FAQ) is server-rendered HTML, readable without JavaScript.

## Commands

Requires Node ≥ 22.23 (24 LTS recommended) and pnpm 10.

```bash
pnpm install
pnpm dev               # http://localhost:4321
pnpm check             # astro check + biome
pnpm format            # biome check --write
pnpm build             # static build in dist/
pnpm generate:assets   # rebuild, then PDFs (public/cv) and social cards (public/og)
pnpm generate:icons    # favicons from src/assets/images/portrait.jpg
```

After changing experiences or copy, run `pnpm generate:assets` and commit `public/cv` and
`public/og`: the production image never runs Chrome.

## Deployment

Pushing to `main` deploys to Fly.io (`.github/workflows/fly-deploy.yml`). The Docker image builds
the site with Node 24 and serves `dist/` with nginx (`deploy/nginx.conf`: language redirect,
caching, compression, security headers, 404 page). Pull requests run `pnpm check` and `pnpm build`
(`.github/workflows/ci.yml`). See [DEPLOYMENT.md](DEPLOYMENT.md).
