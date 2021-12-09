const { join } = require('path');

module.exports = {
  mode: 'jit',
  content: [join(__dirname, './src/lib/**/*.tsx')],
  theme: {
    extend: {}
  },
  plugins: []
};
