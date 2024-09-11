import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#bc6c25',
        secondary: '#ccd5ae',
        'primary-light': '#faedcd',
        'secondary-light': '#e9edc9',
      },
      borderColor: {
        primary: '#bc6c25',
        secondary: '#ccd5ae',
      },
    },
    fontFamily: {
      sans: ['Quicksand', 'system-ui', 'sans-serif'],
      serif: [
        'Lora',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      'serif-fancy': [
        'Bodoni Moda SC',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
  },
  plugins: [],
} satisfies Config;
