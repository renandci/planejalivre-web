/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      logo: ['Best in Class', 'sans-serif'],
    },
    extend: {
      colors: {
        red: '#ef3e2e',
        blue: '#4287c9',
        green: '#47ae47',
        purple: '#681686',
        yellow: '#f9b818',
      }
    },
  },
  plugins: [],
}
