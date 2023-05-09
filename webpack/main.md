Yes, in a React TypeScript project, the `package.json` file's `main` property can affect the behavior of Webpack's development server (`webpack-dev-server`).

Similar to a regular React project, the `main` property in a React TypeScript project specifies the entry point of your application. However, since TypeScript requires compilation before it can be executed in a browser, Webpack needs additional configuration to compile TypeScript files.

By default, the `tsconfig.json` file in a React TypeScript project includes an `include` property that specifies which files should be compiled by TypeScript. The `include` property generally includes all `.ts` and `.tsx` files within the `src` directory.

When you run `webpack-dev-server`, it reads your `webpack.config.js` file to determine how to bundle your project. By default, it will use `./src/index.tsx` as the entry point. However, if your `main` property points to a different file, you'll need to update the `entry` property in your `webpack.config.js` file to match.

For example, if your `main` property is set to `"main": "app.tsx"`, then your `entry` property should be set to:

```
entry: {
  app: './app.tsx',
},
```

This ensures that webpack-dev-server compiles and serves your app from the correct entry point specified in `package.json`. Additionally, you may also need to update any import statements throughout your project to reflect the updated entry point.