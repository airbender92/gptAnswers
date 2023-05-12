`useContext` and `useReducer` are often used together in React applications to provide a global state management solution. 

Here is an example of using `useContext` and `useReducer` together:

```
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const CounterContext = createContext();

function CounterProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={[state, dispatch]}>
      {props.children}
    </CounterContext.Provider>
  );
}

function Counter() {
  const [state, dispatch] = useContext(CounterContext);
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
  )
}

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
```

In this example, we define the initial state and reducer function like we did before, but instead of using it inside the component that needs it, we create a `CounterContext` object using the `createContext` API. We then create a `CounterProvider` component that wraps around any child components that need to use the context. 

Inside the `CounterProvider`, we call `useReducer` with our reducer function and initial state, and store the returned state and dispatch functions in variables. We then use the `CounterContext.Provider` to provide our state and dispatch functions as context values, so that they can be accessed by any child components that need them.

Finally, we go back to our `Counter` component and use `useContext` to access the counter state and dispatch function from the context. We render the current count value and two buttons that let us increment and decrement the count using the dispatch function. 

The `CounterProvider` component acts as a kind of global data store, holding the state and providing it to any other part of the application that needs it. The `Counter` component is just one example of how that state can be used, but any other component that needs access to the data can simply call `useContext` on the same context object to retrieve it.