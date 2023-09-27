当你在Canvas上应用缩放（放大）时，从HTML像素距离到Canvas坐标的换算通常是需要除以放大倍数的。

这是因为缩放操作会改变Canvas上的坐标系，使其在Canvas上绘制的内容变大，从而看起来更大，但Canvas的坐标系统仍然以原始尺寸为基准。这就导致了Canvas上的每个单位（像素）变得更大。因此，要将HTML像素距离转换为Canvas坐标，你需要将HTML像素距离除以缩放倍数，以纠正坐标系的变化。

假设你有一个Canvas上的点（canvasX，canvasY），并且你应用了2x的缩放，这意味着Canvas上的每个像素相当于原始大小的2x像素。如果你想将一个HTML上的点（htmlX，htmlY）转换为Canvas坐标，你应该这样做：

```javascript
// 假设 htmlX 和 htmlY 是 HTML 坐标
var htmlX = 50;
var htmlY = 50;

// 假设 scaleX 和 scaleY 是 Canvas 的缩放倍数
var scaleX = 2;
var scaleY = 2;

// 将 HTML 坐标转换为 Canvas 坐标
var canvasX = htmlX / scaleX;
var canvasY = htmlY / scaleY;
```

这里，我们将HTML像素坐标（htmlX和htmlY）除以Canvas的缩放倍数（scaleX和scaleY）来获得Canvas坐标（canvasX和canvasY）。

总之，当Canvas被放大时，从HTML像素距离到Canvas坐标的换算需要除以放大倍数，因为Canvas坐标系相对于HTML坐标系缩小了。