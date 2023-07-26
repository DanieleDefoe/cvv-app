/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        github: 'url(/src/assets/github.svg)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
