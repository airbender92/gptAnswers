在React中，`forwardRef`可以用于在函数组件中引用子组件的指定DOM节点。使用`forwardRef`可以将ref属性传递给子组件，从而获取到子组件中的DOM节点。

以下是一个示例，演示了如何使用`forwardRef`引用子组件的指定DOM节点：

```jsx
import React, { forwardRef, useRef, useImperativeHandle } from "react";

// 子组件
const ChildComponent = forwardRef((props, ref) => {
  const childRef = useRef(null);

  // 使用useImperativeHandle将子组件内部的DOM节点暴露给父组件
  useImperativeHandle(ref, () => ({
    getChildNode: () => childRef.current
  }), [childRef]);

  return <div ref={childRef}>Child Component</div>;
});

// 父组件
const ParentComponent = () => {
  const childRef = useRef(null);

  const handleButtonClick = () => {
    // 调用子组件的方法获取子组件内部的DOM节点
    const childNode = childRef.current.getChildNode();
    console.log(childNode);
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleButtonClick}>Get Child Node</button>
    </div>
  );
};

export default ParentComponent;
```

在这个示例中，`ChildComponent`是一个函数组件，通过`forwardRef`将ref传递给了子组件的DOM节点。在`ParentComponent`中，我们创建了一个`childRef`，并且在子组件的按钮点击事件中调用了`handleButtonClick`函数。在`handleButtonClick`函数中，通过`childRef.current.getChildNode()`获取到了子组件内部的DOM节点。

这样，就实现了在父组件中引用子组件的指定DOM节点的功能。