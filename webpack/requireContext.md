The `require.context()` function is not available in TypeScript by default. However, you can define the function yourself using declarations to make it work.

Here's an example of how you can define the `require.context` function in a TypeScript file:

```typescript
declare const require: any;

interface RequireContext {
  keys(): string[];
  <T>(id: string): T;
  (id: string): any;
}

declare const __webpack_require__: any;
declare const require: any;

function requireAll(context: RequireContext) {
  return context.keys().map(context);
}

const req = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require;
export function getContext(path: string) {
  return req.context(`../${path}`, true, /\.\/.*\.json$/);
}
```

In this example, we define the `RequireContext` interface to describe the shape of the object returned by `require.context`. We also use the `declare` keyword to declare the global `require` function. Finally, we define the `getContext` function that returns the required context.

You can then use this function to get the required context in your code as follows:

```typescript
import { getContext } from './utils';

const files = getContext('path/to/files');
const data = requireAll(files);
```

```ts
import { requireAll, getContext } from '@/utils/context';
const storeContext = require.context('./', true, /\.store\.ts$/);
const stores: { [key: string]: any } = {};
```


I hope this helps! Let me know if you have any further questions.