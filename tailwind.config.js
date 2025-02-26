import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B00', // Orange
        'secondary': '#001F3F', // Dark Blue
        'dark': '#111111', // Black
      },
      fontFamily: {
        'sans': ['Poppins', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
        'display': ['Montserrat', 'Raleway', ...defaultTheme.fontFamily.sans],
        'body': ['Roboto', 'Lato', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}