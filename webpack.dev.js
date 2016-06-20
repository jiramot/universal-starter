const webpack = require('webpack');


module.exports = new webpack.DefinePlugin({
  __NAME__: JSON.stringify("dev")
});
