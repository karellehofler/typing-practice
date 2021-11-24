const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    theme: {
      green: colors.lime,
      blue: colors.cyan,
      gray: colors.warmGray
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}