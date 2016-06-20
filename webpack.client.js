const path = require('path');
const helper = require('./helpers');

module.exports = {
  target: 'web',
  entry: './src/client',
  output: {
    path: helper.root('dist/client')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};