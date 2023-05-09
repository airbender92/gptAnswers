In Webpack, `chunkFilename` is an option that specifies the filename template for additional chunks (i.e. non-entry chunks) that are generated during the build process. 

Here's an example of how you might use `chunkFilename` in your Webpack configuration:

```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    chunkFilename: '[name].[chunkhash].js', // specify filename for additional chunks
    path: __dirname + '/dist'
  }
};
```

In this example, we're using `chunkFilename` to specify that additional chunks should be named based on their original name (`[name]`) and a unique hash value (`[chunkhash]`). For instance, if we have a dynamic import statement in our code that generates a new chunk called "vendors", the filename for that chunk would be something like "vendors.a1b2c3d4.js".

This can be useful for optimizing the loading of your application code by splitting it into smaller chunks that can be loaded on demand. By specifying a custom filename template for these chunks, you can ensure that they are cached appropriately and avoid issues with browser caching.

I hope that helps! Let me know if you have any additional questions.