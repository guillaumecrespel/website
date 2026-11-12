# syntax = docker/dockerfile:1

ARG NODE_VERSION=24
FROM node:${NODE_VERSION}-slim AS build

LABEL fly_launch_runtime="Astro"
WORKDIR /app

# Chrome is only needed locally to generate the PDFs (they are committed).
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV NODE_ENV=production

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

COPY . .
RUN pnpm run build


FROM nginx:stable-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY deploy/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
