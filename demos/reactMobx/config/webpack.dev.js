const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.comon.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    open: true
  }
})