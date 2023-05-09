Sure, here's a list of common dependencies you might need to install in a React MobX LESS project:

- `react`: The main React library.
- `react-dom`: Provides DOM-specific functionality for React.
- `mobx`: A state management library.
- `mobx-react`: Official bindings for using MobX with React.
- `less`: A CSS preprocessor for adding more powerful styling capabilities.
- `less-loader`: A loader for webpack that allows importing less files into your components.
- `webpack`: A module bundler used to bundle JavaScript files for usage in the browser.
- `babel-loader`: A loader for webpack that transpiles JavaScript code using Babel.
- `@babel/core`: Core Babel package for transforming JavaScript files.
- `@babel/preset-env`: Package for helping Babel transform modern JavaScript syntax to be compatible with older browsers.
- `@babel/preset-react`: Package for allowing Babel to transform React JSX syntax.
- `html-webpack-plugin`: Plugin for simplifying the creation of HTML files to serve your webpack bundles.

To install them, you can use the following command:

```
npm install react react-dom mobx mobx-react less less-loader webpack babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin --save
```

Or if you're using Yarn:

```
yarn add react react-dom mobx mobx-react less less-loader webpack babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin
```

Note that this is just a sample list, and depending on your specific project requirements, you may need additional or different dependencies.