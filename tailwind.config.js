/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,js,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        blackout: '1fr repeat(7, 3fr)',
        'blackout-sm': '3vh repeat(7, 10vh)',
      },
      gridTemplateColumns: {
        blackout: 'repeat(9, 1fr)',
        'blackout-sm': 'repeat(9, 30vw)',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['bumblebee'],
  },
};
