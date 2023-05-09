const { merge } = require('webpack-merge');
const common = require('./webpack.comon.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true
  }
})