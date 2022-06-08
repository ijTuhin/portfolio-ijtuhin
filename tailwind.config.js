module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/banner1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    require(
      'tw-elements/dist/plugin'
    ),
    require(
      "daisyui"
    )
  ],
}