const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        neutral: '#FFFFFF',
        primary: '#1D4ED8',
        secondary: "#CDCDCD",
        background: "#233458",
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

