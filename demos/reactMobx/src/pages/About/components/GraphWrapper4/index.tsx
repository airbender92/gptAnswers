import * as React from 'react';
import { GraphContext } from '@/components/Mxgraph/reducers/graphContext'

const { useEffect, useContext } = React;

const GraphWrapper4 = () => {
  const { state } = useContext(GraphContext);
  const { graph, mx } = state;


  useEffect(() => {
    if (graph && mx) {
      const { mxEvent, mxCellState, mxConstants, mxRubberband, mxCellRenderer, mxShape } = mx;
     
    
  // Define the custom shape for the node with a progress bar
  const CustomNodeShape = () => { }
  CustomNodeShape.prototype = new mxShape();
  CustomNodeShape.prototype.constructor = CustomNodeShape;
  CustomNodeShape.prototype.paintVertexShape = function (c, x, y, w, h) {
    // Draw your node shape here
    // For example, draw a rectangle to represent the node
    c.rect(x, y, w, h);
    c.stroke();
  };

  // Register the custom shape with the graph
  mxCellRenderer.registerShape('customNode', CustomNodeShape);



  // Create a new cell with the custom shape
  const parent = graph.getDefaultParent();
  const cell = graph.insertVertex(parent, null, 'Progress Node', 20, 20, 200, 50, 'customNode');

  // Simulate progress by animating the progress bar from left to right
  let progress = 0;
  const maxProgress = 100;
  const animationDuration = 5000; // Animation duration in milliseconds
  const animationInterval = 50; // Update interval for the animation in milliseconds

  const animateProgressBar = () => {
    if (progress < maxProgress) {
      // Calculate the new progress value
      progress = Math.min(progress + (animationInterval / animationDuration) * maxProgress, maxProgress);

      // Update the node's style to indicate the current progress
      cell.setStyle('progress:' + progress); // For example, you can use a custom style attribute 'progress' to set the progress value

      // Schedule the next animation frame
      setTimeout(animateProgressBar, animationInterval);
    }
  }

  // Start the animation
  animateProgressBar();
    }

  }, [graph, mx]);

  return (<React.Fragment>graph</React.Fragment>)
}

export default GraphWrapper4;