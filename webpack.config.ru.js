// webpack.config.js
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/ru/index.js',
  output: {
    path: path.resolve(__dirname, 'ru/js'),
    filename: 'main.js'
  },
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
};