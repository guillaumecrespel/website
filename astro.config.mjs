// @ts-check

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';

const SITE = 'https://guillaumecrespel.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',

  build: {
    format: 'directory',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon(),
    sitemap({
      // The root only negotiates the language, OG templates are build helpers.
      filter: (page) => page !== `${SITE}/` && !page.includes('/og/'),
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize(item) {
        item.priority = /\/(fr|en)\/$/.test(item.url) ? 1 : 0.7;
        return item;
      },
    }),
  ],

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      weights: ['300 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  ],
});
