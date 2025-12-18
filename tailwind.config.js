/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#065D3D',
          dark: '#044a2e',
        },
        accent: {
          DEFAULT: '#FF6B6B',
          dark: '#e55555',
        },
        background: '#FFFFFF',
        'background-secondary': '#F7F7F7',
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
      },
      fontFamily: {
        clash: ['var(--font-clash-display)', 'sans-serif'],
        sans: ['var(--font-public-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}