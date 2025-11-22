/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ptc-green': {
          DEFAULT: '#1F6A5A',
          dark: '#174D42',
          light: '#2A8570',
        },
        'ptc-teal': {
          DEFAULT: '#3E8C80',
          dark: '#2F6B62',
          light: '#4FA798',
        },
        'ptc-beige': {
          DEFAULT: '#F2E8D8',
          dark: '#E5D5BE',
          light: '#F8F2E8',
        },
        'ptc-ivory': '#FFFFFF',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Barlow', 'sans-serif'],
      },
      borderRadius: {
        'ptc': '12px',
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
