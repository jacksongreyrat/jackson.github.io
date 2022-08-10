module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/img/jackson-pic.JPG')",
        'footer-texture': "url('/img/jackson-pic.JPG')",
      }
    },
  },
  variants: {
    extend: {},
  },

}
