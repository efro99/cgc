import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // vite: {
  //   plugins: [tailwindcss()]
  // },

  integrations: [tailwind()],
});