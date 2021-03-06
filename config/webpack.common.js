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
      {test: /\.json$/, loader: 'raw-loader'},

      /* Raw loader support for *.html
       * Returns file content as string
       *
       * See: https://github.com/webpack/raw-loader
       */
      {test: /\.html$/, loader: 'raw-loader', exclude: [helpers.root('src/index.html')]},

      //Env

      /*  Sass loader support for *.sass
       *
       *  SeeL https://github.com/AngularClass/angular2-webpack-starter/wiki/How-to-include-SCSS-in-components
       */
      {test: /\.scss$/, exclude: /node_modules/, loaders: ['raw-loader', 'sass-loader']}


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