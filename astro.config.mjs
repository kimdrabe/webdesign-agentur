import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kimdrabe.github.io',
  base: '/webdesign-agentur',
  outDir: 'dist',
  build: {
    assets: '_astro',
  },
});
