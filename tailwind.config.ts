import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/lib/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3D44D1',
        secondary: '#FFFFFF',
        accent: '#0E73F6',
        light: '#E9F1FA',
        card: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
