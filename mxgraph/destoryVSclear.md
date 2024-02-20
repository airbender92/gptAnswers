`mxGraph.destroy()` 和 `graphModel.clear()` 是两个不同的方法，它们的作用也不同。

`mxGraph.destroy()` 用于销毁整个 mxGraph 实例，包括其所有组件、事件监听器等。在调用此方法后，该实例将不再可用。

`graphModel.clear()` 用于清除图形模型中的所有内容，包括单元格、边、标签等。但是，它不会销毁整个 mxGraph 实例，只是清空了图形模型的内容。

因此，如果你想要完全删除一个 mxGraph 实例，应该使用 `mxGraph.destroy()` 方法；如果你只想清空图形模型中的内容，应该使用 `graphModel.clear()` 方法。

-----------------------------------

`mxGraphModel` 是 mxGraph 库中的一个类，用于表示图形的模型。要清除 `mxGraphModel` 中的所有内容，可以使用 `clear()` 方法。

示例代码：

```javascript
var graphModel = new mxGraphModel();
graphModel.clear();
```