Yes, if you use the `setGridEnabled` function of an instance of the `mxGraph` class in mxGraph, you will need to update the graph view to see the changes. Here is an example of how you can do this:

```javascript
var graph = new mxGraph(container);
graph.setGridEnabled(true); // Set grid enabled

// Apply changes to the graph view
var view = graph.getView();
view.refresh();
```

In this example, we first create a new instance of the `mxGraph` class and enable the grid using the `setGridEnabled` function. We then retrieve the view object associated with the graph and call the `refresh` function to apply the changes made to the graph. This will cause the grid to be displayed on the graph view.

Note that there are other view-related functions that may also need to be called to update the view when making changes to the graph, depending on what changes you make.