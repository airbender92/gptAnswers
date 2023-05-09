Certainly! Here's an example `webpack.common.js` configuration file for a complicated React + TypeScript + Less project:

```javascript
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
```

This configuration file is similar to the previous one, with a few key differences:

- The entry point of the application is now specified as `./src/index.tsx`, which assumes that your root component is written in TypeScript. 
- The `test` rule for TypeScript files has been updated to recognize both `.ts` and `.tsx` extensions, and loaders for both Babel and TypeScript are added in the `use` array. 
- The `resolve.extensions` array has also been updated to include `.ts` and `.tsx` extensions.
- Finally, the `test` rule for image files includes an `options` object that specifies an output directory for the images using `outputPath`.

Once again, note that this is just an example configuration and may need to be modified based on your specific project needs.

***

- `mini-css-extract-plugin` should be installed as a devDependency because it's only needed during the development process to extract CSS into separate files. 

You can install `mini-css-extract-plugin` as a dev dependency in your project using npm by running the following command:
```
npm install --save-dev mini-css-extract-plugin
```
or using yarn:
```
yarn add --dev mini-css-extract-plugin
``` 

After installing, you can include it in your webpack configuration file and customize it according to your specific needs.