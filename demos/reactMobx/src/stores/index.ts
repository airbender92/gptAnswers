import camelCase from 'lodash/camelCase'

const storeContext: __WebpackModuleApi.RequireContext = require.context('./', true, /\.store\.ts$/);

const stores: { [key: string]: any } = {}


storeContext.keys().forEach((filename) => {
  const storeName = filename.replace(/^\.\/(.*)\.\w+$/, '$1');
  const storeModule = storeContext(filename);
  const { default: Store } = storeModule;
  stores[camelCase(storeName)] = new Store();
});

export default stores;

