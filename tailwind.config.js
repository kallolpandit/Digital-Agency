/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'body': '#E5E5E5',
        'brand': '#0256FF',
        'primary': '#000000',
        'secondary': '#222222',
        'tag': '#F45C20',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif',],
        'dm': ['DM Sans', 'sans-serif',],

      },
      backgroundImage: {

      }
    },
  },
  plugins: [],
}

