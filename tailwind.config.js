/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,js,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'blackout': '1fr repeat(7, 3fr)'
      },
      gridTemplateColumns: {
        'blackout': 'repeat(9, 1fr)'
      }
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: ["bumblebee"],
  },
}
