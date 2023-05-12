import * as React from 'react';
import { GraphContext } from '@/components/Mxgraph/reducers/graphContext'

const { useEffect, useContext } = React;

const GraphWrapper = () => {
  const { state } = useContext(GraphContext);
  const { graph } = state;
  useEffect(() => {
    if (graph) {
      graph.setConnectableEdges(false);
      // Adds cells to the graph
const parent = graph.getDefaultParent();
graph.getModel().beginUpdate();

try {
  const v1 = graph.insertVertex(parent, null, 'Start', 20, 20, 80, 30);
  const v2 = graph.insertVertex(parent, null, 'End', 200, 150, 80, 30);
   graph.insertEdge(parent, null, '', v1, v2);
} finally {
  // Updates the display
  graph.getModel().endUpdate();
}
    }

  }, [graph])
  return (<React.Fragment>graph</React.Fragment>)
}

export default GraphWrapper;