/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-login': '#FFF500',
        'blue-login': '#0E275B',
        'blue-btn': '#2864E2',
        'yellow-btn': '#CEC829',
        'gray-modal': '#D1D5DB'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans 3', 'sans-serif']
      }
    },
  },
  plugins: [],
}

