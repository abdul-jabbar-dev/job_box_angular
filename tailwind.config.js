/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#691f74',
        'primary-lite': '#9f30b0',
        'primary-dark': '#511859',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Adding Poppins as the default sans-serif font
      },
    },
  },
  plugins: [],
}