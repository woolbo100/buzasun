/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'elegant': ['Playfair Display', 'serif'],
        'sans': ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        bd: {
          bg: '#0a0015',
          bg2: '#1a0a2e',
          bg3: '#0f0820',
          pink: '#ff1493',
          pink2: '#ff69b4',
          ivory: '#f7f1ff',
          gray: '#cfc7dc',
          muted: '#a89bbf',
        },
        'pink-custom': {
          400: '#ff69b4',
          500: '#ff1493',
          600: '#c71585',
        },
        'purple-custom': {
          500: '#8a2be2',
        },
        'dark-custom': {
          900: '#0f0a1a',
          800: '#1a0d2e',
          700: '#2d1b4e',
        },
      },
    },
  },
  plugins: [],
}
