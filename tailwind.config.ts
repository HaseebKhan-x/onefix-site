import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#FAFBF6',
        surface: '#FFFFFF',
        ink: '#16203A',
        divider: 'rgba(22,32,58,0.12)',
        section: { DEFAULT: '#EEF6E9', glow: '#DCEEDA' },
        muted: { 200: '#23261F', 300: '#383C31', 400: '#565A4B', 500: '#6D7161', 600: '#7A7E6D' },
        accent: {
          DEFAULT: '#2E7D2E',
          100: '#EAF6E7',
          200: '#C7E8C0',
          300: '#256B29',
          400: '#1F5C22',
          500: '#4C9B32',
          600: '#3D8A2A',
          700: '#327022',
          800: '#25772D',
          900: '#1B4E1F',
        },
        navy: {
          DEFAULT: '#2C4373',
          100: '#E9EDF6',
          200: '#C3D0E7',
          300: '#3A5490',
          400: '#223357',
          500: '#2C4373',
          600: '#24395F',
          700: '#1D2E4D',
          800: '#16203A',
          900: '#101A2E',
        },
      },
    },
  },
  plugins: [],
};
export default config;
