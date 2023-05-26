```js
import * as React from 'react';

export default function useEvent<T extends Function>(callback: T): T {
  const fnRef = React.useRef<any>();
  fnRef.current = callback;

  const memoFn = React.useCallback<T>(
    ((...args: any) => fnRef.current?.(...args)) as any,
    [],
  );

  return memoFn;
}

```

Storing the callback function to a `useRef` is necessary because it provides us with a way to access the latest version of the callback in our memoized event handler. 

When we use the `useCallback` hook, we are creating a memoized version of the original callback function, which gets re-created only when its dependencies change. But what if the callback function itself changes? If we didn't use a `useRef` to store the latest version of the callback, then we might end up with a memoized event handler that refers to an outdated version of the callback.

So by using a `useRef`, we can ensure that the memoized event handler always refers to the latest version of the callback, even if it changes during the lifetime of the component.