/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        rightFromLeft: 'rightFromLeft .4s ease-in-out',
        arrow: 'arrow 1s ease-in-out infinite',
      },
      keyframes: {
        arrow: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: 'translateX(0)' },
        },
        rightFromLeft: {
          '0%': { right: '-100%' },
          '100%': { right: '0' },
        },
      },
    },
  },
  plugins: [],
}
