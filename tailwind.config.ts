import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/lib/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0EAD98',
        secondary: '#FFFFFF',
        accent: '#0E73F6',
        light: '#E9F1FA',
        card: '#FFFFFF',

        bg: {
          primary: '#F7FAFC',
          dark: '#2D2A45',
        },
        boxShadow: {
          'dark-shadow-1': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
        },
        // 'dark-white': '  #1B1F1E',
        // 'dark-primary': '#0A7A6A',
        // 'dark-secondary': '#E2E8F0',
        // 'dark-accent': '#0A58C9',
        // 'dark-light': '#2D3748',
        // 'dark-card': '#2D3748',
      },
      gradientColorStops: {
        'light-blue-fade': '#00BFFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-fade': 'linear-gradient(90deg, rgba(0,212,255,0.25) 40%, rgba(255,255,255,1) 100%)',
      },
      fontFamily: {
        iranYekan: ['Iran Yekan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
