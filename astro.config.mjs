// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Sallyn0225.github.io',
  base: process.env.VERCEL ? '/' : '/imas-lyrics-visualizer',
  vite: {
    plugins: [tailwindcss()]
  }
});