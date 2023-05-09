To enable HMR (Hot Module Replacement) in a React/MobX/Less/TypeScript project, you can follow the steps below:

1. First, make sure that your project is running on Webpack dev server.

2. Install `react-hot-loader` as a development dependency using the command:
```
npm install --save-dev react-hot-loader@next
```

3. Add `react-hot-loader/babel` to your Babel configuration. If you are using a `.babelrc` file, it should look like this:
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": ["react-hot-loader/babel"]
}
```

4. Update your Webpack configuration by adding the following code:
```js
const webpack = require('webpack');

module.exports = {
  // ...
  entry: [
    'react-hot-loader/patch', // this line is added
    './src/index.tsx'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin() // this line is added
  ],
  devServer: {
    hot: true // this line is added
  }
};
```

5. In your main component, wrap the root element with the `hot` function from `react-hot-loader`:
```tsx
import { hot } from 'react-hot-loader/root';
import * as React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* ... your existing code ... */}
      </div>
    );
  }
}

export default hot(App);
```

With these changes in place, you should be able to enjoy the benefits of HMR in your React/MobX/Less/TypeScript project.