/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFEAE5',   // very light
          100: '#FFC7B8',  // light
          200: '#FFA089',  // medium-light
          300: '#F96E4D',  // base
          400: '#D95F44',  // darker
          500: '#B74E3A',  // darker
        },
      },
    },
  },
  plugins: [],
};
