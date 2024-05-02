/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.neutral,
      green: {
        DEFAULT: "#537148",
        50: "#f6f8f5",
        100: "#e9f1e7",
        200: "#c9d9c3",
        300: "#b4c9ac",
        400: "#8aa97f",
        500: "#688b5c",
        600: "#537148",
        700: "#425a3b",
        800: "#374932",
        900: "#2f3c2b",
        950: "#161f14",
      },
      orange: {
        DEFAULT: "#bc7223",
        50: "#fcf9ee",
        100: "#f6edcf",
        200: "#edda9a",
        300: "#e4c465",
        400: "#ddaf42",
        500: "#d4932c",
        600: "#bc7223",
        700: "#9c5421",
        800: "#864622",
        900: "#69381e",
        950: "#3c1c0c"
      },
      beige: {
        DEFAULT: "#d08967",
        50: "#fbf6f1",
        100: "#f5e9df",
        200: "#ebd0bd",
        300: "#deb093",
        400: "#d08967",
        500: "#c66c49",
        600: "#b8593e",
        700: "#994535",
        800: "#7b3a31",
        900: "#64322a",
        950: "#351815",
      }
      
    },
    extend: {
      fontFamily: {
        'choco': ['"Choco chici"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}