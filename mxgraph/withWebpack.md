When using Webpack, you can dynamically set the `mxBasePath` for your `mxGraph` library by using the `DefinePlugin`. This will replace any occurrences of `process.env.MX_BASE_PATH` in your code with the value that you define.

Here's an example of how you can use the `DefinePlugin` to set the `mxBasePath` dynamically:

1. First, install the `dotenv-webpack` package:

```bash
npm install dotenv-webpack --save-dev
```

2. Create a `.env` file in the root directory of your project and define your `mxBasePath` variable:

```
MX_BASE_PATH=./node_modules/mxgraph/javascript/src
```

3. In your Webpack config file, import the `dotenv-webpack` package and add it to the plugins array:

```javascript
const Dotenv = require('dotenv-webpack');

module.exports = {
  // ...other Webpack config options...
  plugins: [
    new Dotenv(),
    // ...other plugins...
  ],
};
```

4. In your React code, import `mxClient` from the `mxgraph` package and set the `mxBasePath` after loading `mxClient.js`:

```jsx
import { mxClient } from 'mxgraph';

// Set the mxBasePath after loading mxClient.js
mxClient.mxBasePath = process.env.MX_BASE_PATH;
```

Now, whenever you run your Webpack build, the `mxBasePath` will be set dynamically based on the value that you defined in your `.env` file.