Absolutely! Higher Order Components (HOCs) can be used with both class components and function components in React. Here's an example of using an HOC with a function component:

```jsx
import React, { useEffect } from 'react';

const withData = (WrappedComponent) => {
  return function WithData(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
};

function MyComponent(props) {
  const { data } = props;
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default withData(MyComponent);
```

In this example, we use the `useState` and `useEffect` hooks to fetch data from an API when the component mounts. We then pass the fetched data down to the wrapped component using the spread operator (`...props`). Finally, we export the result of calling our `withData` HOC on `MyComponent`.

This pattern allows us to reuse data fetching logic across multiple components, while still keeping our components focused on presentation logic. It also makes it easy to add or modify the data being fetched without modifying each individual component.