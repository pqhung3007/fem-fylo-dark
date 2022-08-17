/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  // mode switching based on class name
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
        'logo-light-mode': "url('../images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
      }),
      colors: {
        blueIntro: 'hsl(217,28%, 15%)',
        blueMain: 'hsl(218, 28%, 13%)',
        blueFooter: 'hsl(216, 53%, 9%)',
        blueTestimonial: 'hsl(219, 30%, 18%)',
        gradient1: 'hsl(176, 68%, 64%)',
        gradient2: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)'
      }
    },
  },
  variants: {
    extends: {
      backgroundImage: ['dark']
    }
  },
  plugins: [],
}
