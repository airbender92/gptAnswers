以下是使用JavaScript编写的代码示例：

```javascript
var svg = '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>';
var image = new mxImage('data:image/svg+xml,' + encodeURIComponent(svg));
```

这段代码创建了一个SVG格式的图像，并将其存储在`image`变量中。你可以根据需要修改SVG代码来生成不同的图像。