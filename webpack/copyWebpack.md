To set the `mxgraph/javascript/src` folder to a static path when building your React mxGraph project, you can use the `CopyWebpackPlugin` plugin in your webpack configuration.

First, make sure that you have installed the `copy-webpack-plugin` package by running the following command:

```
npm install --save-dev copy-webpack-plugin
```

Then, add the following code to your `webpack.config.js` file:

```javascript
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // other configurations...
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/mxgraph/javascript/src', to: 'static' }
      ]
    })
  ]
};
```

This will copy the `mxgraph/javascript/src` folder to a `static` folder in your build directory. You can then reference the files in this folder in your application using a relative path, like so:

```javascript
import mx from './static/mxClient';
```

Note that you may need to adjust the `from` and `to` paths depending on your specific project structure.