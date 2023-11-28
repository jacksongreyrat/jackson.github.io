module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#FAF9F6',
        'nav': '#FAF9F6',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        'purple: #3f3fff'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/img/ethShape')",
        'footer-texture': "url('/img/ethShape')",
      }
    },
  },
  variants: {
    extend: {},
  },

}
