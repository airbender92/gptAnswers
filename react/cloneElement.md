`React.cloneElement` is a method provided by the React library that allows you to create a new React element with the same type and props as an existing element. 

The basic syntax for `React.cloneElement` is as follows:

```jsx
React.cloneElement(element, [props], [...children])
```

where:
- `element`: the element to clone
- `[props]` (optional): an object of props to apply to the cloned element
- `[...children]` (optional): new children to add to the cloned element

Here's an example of how to use `React.cloneElement`:

```jsx
function MyComponent(props) {
  const clonedElement = React.cloneElement(props.children, { className: 'highlighted' });
  return (
    <div>
      <h1>{props.title}</h1>
      {clonedElement}
    </div>
  );
}

function App() {
  return (
    <MyComponent title="Example">
      <p>This is some text.</p>
    </MyComponent>
  );
}
```

In this example, `MyComponent` takes a `title` prop and a child component (`props.children`), and clones the child with an additional `className` prop set to `"highlighted"`. This creates a new React element that is a copy of the original child element but with the added prop.

Note that `React.cloneElement` only works on a single element, so if you want to clone multiple elements, you need to call it multiple times.