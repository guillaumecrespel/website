// @ts-check

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://guillaumecrespel.fr',
  base: '/',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), icon()],

  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: false
    }
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Space Grotesk',
        cssVariable: '--font-space-grotesk',
      },
    ],
  },
});
