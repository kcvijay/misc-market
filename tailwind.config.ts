import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Lato', 'system-ui', 'sans-serif'],
    },
    colors: {},
  },
  plugins: [],
} satisfies Config;
