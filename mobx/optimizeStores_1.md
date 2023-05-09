If you have a large number of stores, manually importing each one in the `stores/index.ts` file can become very tedious. To optimize this process, you can use the dynamic import syntax along with Promise.all() to load all your stores asynchronously.

Here's an example of how you can use dynamic imports to load all your store files:

```typescript
const storeNames = ['storeA', 'storeB', 'storeC'];

const stores = {};

Promise.all(storeNames.map(async (storeName) => {
  const storeModule = await import(`./${storeName}`);
  stores[storeName] = new storeModule.default();
}));

export default stores;
```

In this example, we define an array of store names and an empty object called `stores`. We then use Promise.all() along with the `map()` function to iterate over each store name and dynamically import each store module using template literals. 

Finally, we add each store instance to the `stores` object as properties and export this object as the default export from `stores/index.ts`.

This way, you don't have to manually import each store module individually, and you can simply add or remove store names from the `storeNames` array as needed.

I hope this helps you to optimize the process of importing multiple MobX store files in your project!