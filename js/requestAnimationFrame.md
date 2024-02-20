在 `requestAnimationFrame` 动画中，可以通过判断数据状态的变化来决定是否跳出动画。具体实现方式如下：

1. 在动画函数中，获取当前的数据状态。
2. 判断数据状态是否满足跳出动画的条件，如果满足则直接返回，不再执行后续的动画操作。
3. 如果数据状态不满足跳出动画的条件，则继续执行后续的动画操作。

示例代码：

```javascript
function animate() {
  // 获取当前的数据状态
  const data = getData();

  // 判断数据状态是否满足跳出动画的条件
  if (data.shouldStop) {
    // 如果满足条件，则直接返回，不再执行后续的动画操作
    return;
  }

  // 如果数据状态不满足跳出动画的条件，则继续执行后续的动画操作
  // ...

  // 请求下一帧动画
  requestAnimationFrame(animate);
}

// 启动动画
requestAnimationFrame(animate);
```

在上面的示例代码中，`getData()` 函数用于获取当前的数据状态，`data.shouldStop` 表示是否满足跳出动画的条件。如果满足条件，则直接返回，不再执行后续的动画操作；否则，继续执行后续的动画操作。