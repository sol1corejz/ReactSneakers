/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter']
    },
    extend: {
      colors: {'pinky': '#F4EFE9', 'stan-green': '#8BB43C'}
    },
  },
  plugins: [],
}
