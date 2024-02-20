在 mxGraph 中，`mxCellOverlay` 是一个用于创建和处理图形单元格（vertices 和 edges）上的覆盖物（overlays）的类。覆盖物是放置在单元格上方的额外视觉元素，可以用来强调、装饰或提供有关单元格的其他信息。

`mxCellOverlay` 类提供了一种机制，允许开发者在现有的单元格上添加自定义的标记或图标。这些覆盖物可以用于多种目的，例如：

- 显示状态图标，如错误、警告或成功标记。
- 添加标签或注释，以提供额外的上下文信息。
- 实现交互式功能，如拖放操作的指示器。

要使用 `mxCellOverlay`，你需要实例化它，并设置其属性，如位置、尺寸和样式。然后，你可以将这个覆盖物添加到目标单元格上。

以下是一个简单的示例，展示了如何创建一个红色的圆形覆盖物并将其添加到一个顶点上：

```javascript
// 创建一个图形模型
var model = new mxGraphModel();

// 获取默认的父节点
var parent = graph.getDefaultParent();

// 添加一个顶点
var v1 = graph.insertVertex(parent, '节点1', 20, 20, 30, 30);

// 创建一个圆形覆盖物
var overlay = new mxCellOverlay();
overlay.setFillColor('red');
overlay.setShape('ellipse');
overlay.setWidth(10);
overlay.setHeight(10);
overlay.setOffsetX(15);
overlay.setOffsetY(15);

// 将覆盖物添加到顶点上
graph.getModel().beginUpdate();
try {
  var cell = graph.getCell(v1);
  graph.getModel().addOverlay(cell, overlay);
} finally {
  graph.getModel().endUpdate();
}
```

在这个示例中，我们首先创建了一个图形模型和一个默认的父节点。然后，我们添加了一个顶点，并创建了一个圆形覆盖物。我们设置了覆盖物的填充颜色、形状、尺寸和位置。最后，我们将这个覆盖物添加到了顶点上。

通过使用 `mxCellOverlay` 类，你可以轻松地在 mxGraph 中创建和管理单元格上的覆盖物，以增强图表的可视化效果和交互性。