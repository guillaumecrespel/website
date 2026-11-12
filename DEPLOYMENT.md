# Deployment

The site is deployed to [Fly.io](https://fly.io) on every push to `main`
(`.github/workflows/fly-deploy.yml`, [Fly's recommended setup](https://fly.io/docs/launch/continuous-deployment-with-github-actions/)).

## How it works

1. GitHub Actions runs `flyctl deploy --remote-only`.
2. Fly builds the `Dockerfile`:
   - **build stage** (Node 24, pnpm via Corepack): `pnpm install --frozen-lockfile` then
     `pnpm build`. `PUPPETEER_SKIP_DOWNLOAD=true` keeps Chrome out of the image.
   - **runtime stage**: `nginx:stable-alpine` serving `dist/` with `deploy/nginx.conf`.
3. Fly serves the app on port 80 behind its HTTPS proxy (`fly.toml`).

## nginx behaviour (`deploy/nginx.conf`)

- `/` answers `302` to `/fr/` or `/en/` from `Accept-Language` (`Vary: Accept-Language`).
- `/_astro/*` (hashed files) cached one year, immutable; HTML always revalidated.
- gzip for text assets, security headers (`deploy/security-headers.conf`), custom `404.html`.
- `/sw.js` is never cached: it is a kill switch that removes the cache-first service worker
  shipped by an earlier version of the site. Keep it deployed for a few months.

## Generated assets

The resume PDFs (`public/cv/`) and social cards (`public/og/`) are generated locally and committed:

```bash
pnpm generate:assets
git add public/cv public/og
```

## Secrets

`FLY_API_TOKEN` must exist in the repository secrets:

```bash
flyctl tokens create deploy -x 999999h
```

Copy the whole value (including the `FlyV1 ` prefix) into
GitHub → Settings → Secrets and variables → Actions → `FLY_API_TOKEN`.

## Checking the image locally

```bash
docker build -t website .
docker run --rm -p 8080:80 website
curl -sI -H 'Accept-Language: en' http://localhost:8080/   # 302 → /en/
```

## Troubleshooting

- Authentication error in the workflow: check the `FLY_API_TOKEN` secret.
- Runtime problem: `flyctl logs`.
