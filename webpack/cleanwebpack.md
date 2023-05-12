To clear the `dist` folder before each webpack build, you can use the `CleanWebpackPlugin`. 

First, install the plugin via terminal:
```
npm install clean-webpack-plugin --save-dev
```

Then, require it in your `webpack.config.js` file and add it to the plugins array:

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // ...
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
```

Now, every time you run `webpack`, the `CleanWebpackPlugin` will remove all files inside the `dist` folder before building new files.