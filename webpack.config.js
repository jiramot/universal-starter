const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./webpack.common.js');
const clientConfig = require('./webpack.client');
const serverConfig = require('./webpack.server');
const helper = require('./helpers')

// Default config
var defaultConfig = {
  context: __dirname,
  resolve: {
    root: helper.root('/src')
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