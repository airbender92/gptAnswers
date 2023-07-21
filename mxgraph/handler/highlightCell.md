In mxGraph, you can add a listener to detect when the mouse cursor hovers over a cell using the `mxEvent.MOUSE_OVER` event. Here's an example of how you can do this:

```javascript
// Assuming you have a reference to the mxGraph instance called 'graph'

// Define the listener function for the mouse over event
var mouseOverListener = function(sender, evt) {
  var cell = evt.getProperty('cell');
  
  // Perform actions when the mouse hovers over a cell
  if (cell) {
    console.log('Mouse over cell with ID: ' + cell.getId());
    // Perform additional actions or highlight the cell here
  }
};

// Add the listener to the graph
graph.addListener(mxEvent.MOUSE_OVER, mouseOverListener);
```

In this example, we define a function `mouseOverListener` to handle the mouse over event. Inside the listener, we retrieve the cell using `evt.getProperty('cell')`. If a cell is present, we can perform actions or apply highlighting to the cell.

Finally, we add the listener to the graph using `graph.addListener(mxEvent.MOUSE_OVER, mouseOverListener)`. This will invoke the listener function whenever the mouse cursor hovers over a cell in the graph.

You can modify the listener function to suit your specific requirements, such as applying custom styling or executing specific actions when the mouse hovers over a cell.


In the callback function for the `mxEvent.MOUSE_OVER` event in mxGraph, `sender` refers to the object that triggered the event, which in this case is the mxGraph instance. `evt` stands for the event object itself, which contains information about the event and its properties.

The `sender` parameter is often used to refer to the object that triggered the event, providing access to the mxGraph instance and its methods or properties. It allows you to interact with the graph or perform operations based on the event.

The `evt` parameter provides access to the event object, which contains information specific to the event that occurred. It may include properties like the cell that triggered the event (`evt.getProperty('cell')`) or the mouse coordinates (`evt.getProperty('event')`). The specific properties available in the event object depend on the event type.

In the example provided, `sender` is the mxGraph instance that triggered the `MOUSE_OVER` event, and `evt` contains information about the event and its properties. You can use these parameters to access the necessary information and perform actions based on the event.