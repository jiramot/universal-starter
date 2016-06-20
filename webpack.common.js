const webpack = require('webpack');
const path = require('path');

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
        root('node_modules/rxjs'),
        root('node_modules/@angular'),
      ]
      }
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]

};

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
