在 mxGraph 中，当需要对图形模型进行修改时，需要调用 `graph.getModel().beginUpdate()` 方法来开始一个更新事务。这样可以确保在修改过程中，图形模型的状态不会被其他操作所干扰。

具体来说，当你需要执行以下操作时，需要调用 `graph.getModel().beginUpdate()`：

1. 添加、删除或修改图形中的单元格（cell）。
2. 添加、删除或修改图形中的边（edge）。
3. 添加、删除或修改图形中的标签（label）。
4. 修改图形的布局或样式。

示例代码：

```javascript
// 获取图形模型
var model = graph.getModel();

// 开始一个更新事务
model.beginUpdate();

try {
  // 执行一些修改操作
  var cell = model.add(new mxCell());
  var edge = model.add(new mxGeometry(), new mxPoint(0, 0), new mxPoint(100, 100));
  var label = model.add(new mxGeometry(), new mxPoint(50, 50), 'Hello World');
} finally {
  // 结束更新事务
  model.endUpdate();
}
```

在上面的示例代码中，我们首先获取了图形模型，然后调用 `model.beginUpdate()` 开始一个更新事务。接着，我们执行了一些修改操作，包括添加单元格、添加边和添加标签。最后，我们调用 `model.endUpdate()` 结束更新事务。


你可以将这个逻辑封装成一个函数，如下所示：

```javascript
function updateGraphModel(graph, updateFunction) {
  graph.getModel().beginUpdate();
  try {
    updateFunction();
  } finally {
    graph.getModel().endUpdate();
  }
}
```

这个函数接受两个参数：一个是 mxGraph 实例，另一个是一个回调函数，用于执行实际的更新操作。在函数内部，我们首先调用 `graph.getModel().beginUpdate()` 开始一个更新事务，然后执行回调函数，最后调用 `graph.getModel().endUpdate()` 结束更新事务。

使用这个函数时，你可以将需要执行的更新操作封装成一个函数，然后传递给 `updateGraphModel` 函数，例如：

```javascript
function addCell(graph) {
  var cell = new mxCell();
  graph.addCell(cell);
}

updateGraphModel(graph, addCell);
```