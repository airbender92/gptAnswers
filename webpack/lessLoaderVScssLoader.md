`less-loader` and `css-loader` are two loaders for webpack that are commonly used together to enable the use of LESS stylesheets in a project. 

The `css-loader` module is used to load CSS files in your application. It takes the imported CSS file and returns the CSS code. Additionally, it also handles the `@import` and `url()` statements within the CSS file. 

On the other hand, `less-loader` allows you to import Less files in your JavaScript components. It compiles Less code to CSS code that can be understood by the browser. The compiled CSS code is then passed on to the `css-loader`, which handles further processing.

To use both `less-loader` and `css-loader` together, you would need to install them as dependencies via npm or yarn:

```bash
npm install less-loader css-loader --save-dev
```

Then, you would configure them in the `module.rules` array in your webpack configuration file:

```js
module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.less$/,
        use: [
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  }
}
```

This configuration sets up webpack to use the `css-loader` followed by the `less-loader` for all files with a `.less` extension. This way, you can import Less files in your JavaScript components and the styles will be properly processed by webpack.