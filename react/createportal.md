在React中，你可以使用`ReactDOM.createPortal()`方法将DOM片段挂载到指定的父节点上。这种方法可以让你将组件渲染到DOM树的任何位置，而不受React组件层次结构的限制。

以下是一个基本的使用示例：

首先，确保你已经安装了`react-dom`库，因为`createPortal()`方法是`react-dom`库的一部分。

然后，在你的React组件中，你可以使用`createPortal()`方法将DOM片段挂载到指定的父节点上。以下是一个示例：

```jsx
import React from "react";
import ReactDOM from "react-dom";

const MyComponent = () => {
  const portalRoot = document.getElementById("portal-root");

  return ReactDOM.createPortal(
    <div className="portal-content">
      This content is rendered inside a portal and mounted to a different DOM node.
    </div>,
    portalRoot
  );
};

export default MyComponent;
```

在这个示例中，`MyComponent`组件使用`ReactDOM.createPortal()`方法将内容渲染到id为`portal-root`的DOM节点上。无论`MyComponent`组件在React组件树的哪个位置，它都会被渲染到`portal-root`的DOM节点内部。

请确保在你的HTML文件中存在一个具有id为`portal-root`的DOM元素，例如：

```html
<div id="portal-root"></div>
```

这样，当你在React应用中使用`MyComponent`组件时，其内容就会被挂载到指定的父节点上。