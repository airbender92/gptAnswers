When using both `css-loader` and `style-loader` to load CSS files, the correct order to use them in your webpack configuration is as follows:

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

Here, the rule specifies that any file with a `.css` extension should be loaded using both `style-loader` and `css-loader`.

The reason for this order is that `css-loader` interprets `@import` and `url()` statements in CSS files and resolves them, while `style-loader` injects the CSS into the DOM by creating a `style` tag. 

By placing `style-loader` before `css-loader`, we ensure that the CSS is injected into the DOM via a `style` tag after all `@import` and `url()` statements have been resolved by the `css-loader`. This allows our styles to be properly applied to the elements in our web page.