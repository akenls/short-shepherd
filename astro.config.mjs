// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://akenls.github.io',
  base: '/short-shepherd',
  build: {
    format: 'directory',
  },
});
