// webpack.config.js
var path = require('path');

module.exports = {
  mode: 'production',
    entry: {
    main_m: './src/js/scroll.js',
    main: [
      './src/js/scroll.js', 
      './src/js/ru/slogan.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'ru/js'),
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