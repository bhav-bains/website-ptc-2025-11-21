/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ptc-green': {
          DEFAULT: '#1F6A5A',
          dark: '#174D42',
          DEFAULT: '#006B3F', // Primary Brand Color
          light: '#008F54',
          dark: '#004D2D',
          50: '#F0FDF4',
          100: '#DCFCE7',
          900: '#14532D',
        },
        'ptc-teal': {
          DEFAULT: '#00A896', // Secondary Accent
          light: '#33B9AB',
          dark: '#008577',
        },
        'ptc-beige': {
          DEFAULT: '#F5F5F0', // Background Neutral
          dark: '#E6E6E0',
        },
        'ptc-blue': {
          DEFAULT: '#0F172A', // Dark Text/Heading
          light: '#334155', // Body Text
        }
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'ptc': '0.5rem',
        'ptc-lg': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '88': '22rem',
        '96': '24rem',
      },
      lineHeight: {
        'relaxed-extra': '1.75',
      },
      boxShadow: {
        'ptc': '0 4px 20px rgba(31, 106, 90, 0.1)',
        'ptc-lg': '0 10px 40px rgba(31, 106, 90, 0.15)',
      },
    },
  },
  plugins: [],
};
