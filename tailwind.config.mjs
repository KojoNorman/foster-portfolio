/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#163B32',
          dark: '#102A25',
        },
        ivory: '#F7F5EF',
        surface: '#FFFFFF',
        charcoal: '#202722',
        olive: '#68716A',
        brass: '#B18A50',
        stone: '#E3E2D9',
        sage: '#DCE6DD',
      },
      fontFamily: {
        heading: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        editorial: '1160px',
      },
    },
  },
  plugins: [],
};
