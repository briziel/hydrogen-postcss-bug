module.exports = {
  plugins: {
    'postcss-custom-media': {
      importFrom: './app/styles/mediaqueries.css',
    },
    'postcss-nested': {},
    autoprefixer: {},
  },
};
