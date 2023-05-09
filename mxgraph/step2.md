In mxGraph, a `Graph` object is used to represent a graph or diagram. It acts as a container for cells that are used to visually represent the data in your graph.

To create a new Graph object, you can simply call the constructor with an empty model:

```javascript
var graph = new mxGraph();
```

You can then add cells to this graph using the following methods:

- `graph.insertVertex(parent, id, value, x, y, width, height, style)`: This method is used to insert a new vertex into the graph.
  - `parent`: The parent cell of the new vertex.
  - `id`: The ID of the new vertex.
  - `value`: The value displayed inside the vertex.
  - `x`: The x-coordinate of the top-left corner of the vertex.
  - `y`: The y-coordinate of the top-left corner of the vertex.
  - `width`: The width of the vertex.
  - `height`: The height of the vertex.
  - `style`: An optional string containing one or more key-value pairs representing the style of the vertex.

- `graph.insertEdge(parent, id, value, source, target, style)`: This method is used to insert a new edge into the graph.
  - `parent`: The parent cell of the new edge.
  - `id`: The ID of the new edge.
  - `value`: The value displayed on the edge.
  - `source`: The source vertex of the edge.
  - `target`: The target vertex of the edge.
  - `style`: An optional string containing one or more key-value pairs representing the style of the edge.

Additionally, you can set various properties and event listeners on the graph object to customize its behavior and appearance. For example, you can set the background color of the graph using the `setBackgroundImage()` method, or define custom behavior for mouse events using methods such as `setConnectable()`.