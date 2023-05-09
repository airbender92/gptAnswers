When using TypeScript with Webpack, you need to use both `babel-loader` and `ts-loader`.

Here's an example of how you can configure your Webpack module rules to use both loaders:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
  // ...
}
```

In this example, we're first using `babel-loader` to transpile our TypeScript code to JavaScript, and then passing the result to `ts-loader` to be type-checked.

Make sure that you've installed both `babel-loader` and `ts-loader` as devDependencies in your project, and also installed any necessary presets or plugins for Babel to work properly with your project.