const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./config/webpack.common.js');
const clientConfig = require('./config/webpack.client.js');
const serverConfig = require('./config/webpack.server.js');
const helpers = require('./helpers')

// Default config
var defaultConfig = {
  context: __dirname,
  resolve: {
    root: helpers.root('/src')
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'index.js'
  }
};

var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
];