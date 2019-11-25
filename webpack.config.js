
// webpack.config.js
var path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: [
      './src/js/scroll-nav.js',
      './src/js/scroll-show.js'
    ],
    typed: [
      './src/js/slogan.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js'
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