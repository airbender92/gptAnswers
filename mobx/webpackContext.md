In a React TypeScript MobX project, one way to automatically get all store files without manually writing them in an `index.ts` file is to use dynamic imports and Webpack's `require.context()` method.

First, create a `stores` directory in your project root folder and put all your store files inside it. Then, instead of importing each store file manually in an `index.ts` file, you can use `require.context()` to dynamically import all `.store.ts` files in the `stores` directory at runtime.

Here's an example:

```typescript
// src/stores/index.ts

const storeContext = require.context('./', true, /\.store\.ts$/);
const stores: { [key: string]: any } = {};

storeContext.keys().forEach((filename) => {
  const storeName = filename.replace(/^\.\/(.*)\.\w+$/, '$1');
  const storeModule = storeContext(filename);
  stores[storeName] = new storeModule.default();
});

export default stores;
```

In this example, we use Webpack's `require.context()` method to create a context object that allows us to dynamically import modules using a regular expression pattern. The `./` argument specifies the directory to search for modules, `true` enables recursive searching, and `\.store\.ts$/` matches any file ending with `.store.ts`.

We then loop through all the matched filenames using `keys()` and extract the store name by replacing the first `'./'` and file extension in the filename with an empty string. Finally, we use `require()` to load each module and instantiate its default export as a new instance of the store class. The resulting store instances are added to a `stores` object that we export as the default export of the `index.ts` file.

With this approach, whenever you add a new store file to the `stores` directory, it will automatically be included in the `stores` object without needing to modify the `index.ts` file. Note that you must have a build step (i.e. run your code through a bundler like Webpack) for this method to work, since `require.context()` is a Webpack-specific feature.