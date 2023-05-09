Sure, here's an example of a scalable Webpack configuration for a React project:

```javascript
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(options.mode),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devtool: options.mode === 'development' ? 'eval-cheap-source-map' : false,
  devServer: {
    contentBase: './build',
    hot: true,
    open: true,
  },
});
```

This basic Webpack configuration has the following features:

- Supports modern JavaScript syntax by transpiling code with Babel.
- Allows importing `.less` files into components for more powerful styling capabilities.
- Generates HTML files that automatically include bundled script files.
- Uses `clean-webpack-plugin` to clear the build folder before each build.
- Adds environment variables like `NODE_ENV` using `webpack.DefinePlugin`.
- Supports hot reloading during development using `webpack-dev-server`.

You can further customize this configuration based on your project requirements. For example, you might want to add more loaders or plugins to support different file types or optimize your code for production.