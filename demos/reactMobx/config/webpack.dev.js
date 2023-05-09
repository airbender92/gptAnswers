
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.comon.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    "react-hot-loader/patch",
    path.resolve(__dirname, "../src/index.tsx"),
  ],
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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist')
    },
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: false
  }
})