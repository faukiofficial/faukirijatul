/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      screens: {
        "1500px": "1500px",
        "1300px": "1300px",
        "1200px": "1200px",
        "1100px": "1100px",
        "1000px": "1000px",
        "800px": "800px",
        "600px": "600px",
        "400px": "400px",
      }
    },
  },
  plugins: [],
}