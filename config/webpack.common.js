const webpack = require('webpack');
const path = require('path');
const helpers = require('./../helpers');

module.exports = {
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      // TypeScript
      {test: /\.ts$/, loader: 'ts-loader'},
      {test: /\.json$/, loader: 'raw-loader'}
    ],
    preLoaders: [
      // needed to lower the filesize of angular due to inline source-maps
      {
        test: /\.js$/, loader: 'source-map-loader', exclude: [
        // these packages have problems with their sourcemaps
        helpers.root('node_modules/rxjs'),
        helpers.root('node_modules/@angular'),
      ]
      }
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
};