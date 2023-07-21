Unfortunately, as a text-based AI model, I don't have the capability to provide a live demo of the `mxKeyHandler` in action. However, I can provide you with an example code snippet that demonstrates how to use `mxKeyHandler` in mxGraph:

```javascript
// Assuming you have an mxGraph instance named 'graph'
// Create a new instance of mxKeyHandler
var keyHandler = new mxKeyHandler(graph);

// Register key event handlers
keyHandler.bindKey(46, function(evt) {
  // Handle delete key event (keyCode 46) here
  graph.removeCells();
});

keyHandler.bindKey(83, function(evt) {
  // Handle 'S' key event (keyCode 83) here
  // For example, you can save the graph
  saveGraph();
});

// ... more key event handlers ...

// Enable the key handler
keyHandler.setEnabled(true);
```

In this example, we create an `mxKeyHandler` object and bind specific key codes (46 for the delete key and 83 for the 'S' key) to event handler functions. Inside the event handlers, you can define the desired behavior for each key event. Finally, we enable the key handler by setting `setEnabled(true)`.

Please note that this example assumes you have already set up an `mxGraph` instance named `graph`. You may need to adapt the code to your specific use case and integrate it into your existing application.

For a more detailed understanding of the `mxKeyHandler` class and its available methods and properties, you can refer to the mxGraph documentation or the source code of mxGraph.