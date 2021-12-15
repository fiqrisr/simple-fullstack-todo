const { join } = require('path');

module.exports = {
  mode: 'jit',
  content: [join(__dirname, './src/**/*.tsx')],
  theme: {
    extend: {}
  },
  plugins: []
};
