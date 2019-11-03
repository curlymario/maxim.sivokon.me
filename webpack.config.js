<<<<<<< HEAD
const path = require('path');

module.exports = {

  entry: './src/js/index.js',

=======
// webpack.config.js
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
>>>>>>> reconfigured webpack
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'main.js'
  },
<<<<<<< HEAD

  mode: 'development'
=======
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
>>>>>>> reconfigured webpack
};