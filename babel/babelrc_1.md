Certainly! Here's an example `.babelrc` configuration along with a corresponding `webpack.config.js` setup for a React TypeScript MobX project:

`.babelrc`

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "transform-class-properties",
    ["@babel/plugin-transform-runtime", {
      "regenerator": true
    }]
  ]
}
```

I've included the same presets and plugins as my previous [example](./babelrc.md), but I also added the `"transform-class-properties"` plugin to the plugins array. This is necessary to properly transpile the MobX decorators used in this project (e.g. `@observable`, `@observer`, etc.). Additionally, I've included the `"@babel/plugin-transform-runtime"` plugin with the `"regenerator": true` option set. This is needed if you plan on using async/await syntax in your project.

`webpack.config.js`

```javascript
const webpack = require('webpack')
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            cacheDirectory: true
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new HtmlPlugin({
      title: 'My App',
      template: 'public/index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true
  }
}
```

Here, I've set up a basic Webpack configuration that transpiles TypeScript and JSX files using the Babel loader. The loader is configured to use the `.babelrc` file we created earlier by setting `"babelrc": true` in its options.

I've also included some plugins to define environment variables and generate an HTML template for our app, as well as set up a basic development server.

I hope this helps! Let me know if you have any further questions or concerns.