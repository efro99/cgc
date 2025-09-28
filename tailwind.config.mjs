/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      'havelock-blue': {
          '50': '#ebf1fd',
          '100': '#cfdffb',
          '200': '#a1c4f7',
          '300': '#71adf4',
          '400': '#3f97e9',
          '500': '#3785cf',
          '600': '#2c6eab',
          '700': '#205485',
          '800': '#13395d',
          '900': '#071f36',
          '950': '#031221',
        }},
  },
  plugins: [],
};