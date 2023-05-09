Yes, `tsconfig.json`'s `baseUrl` option specifies the root directory of the project. 

By default, TypeScript resolves modules relative to the location of the current file. `baseUrl` allows you to resolve paths relative to the base directory of your project instead.

For instance, if you have a file named `index.ts` located at "./src/index.ts" and you set `baseUrl` as "./src", then you can import other files from the project using:

```typescript
import { foo } from 'utils'; // Resolved to ./src/utils/index.ts
import { bar } from 'api'; // Resolved to ./src/api/index.ts
```

However, keep in mind that `baseUrl` is used only by the TypeScript compiler, not by the runtime environment. If you want to use absolute paths in your application code, you still need to configure your module loader or bundler accordingly (e.g., using webpack's `resolve.alias`).