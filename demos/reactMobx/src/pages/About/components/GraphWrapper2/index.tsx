import * as React from 'react';
import { GraphContext } from '@/components/Mxgraph/reducers/graphContext'

const { useEffect, useContext } = React;

const GraphWrapper2 = () => {
  const { state } = useContext(GraphContext);
  const { graph, mx } = state;


  useEffect(() => {
    if (graph && mx) {
      const { mxEvent, mxCellState, mxConstants, mxRubberband } = mx;
      // Disables the built-in context menu
      mxEvent.disableContextMenu(graph.container);

      // Enables connect preview for the default edge style
      graph.connectionHandler.createEdgeState = function (me) {
        const edge = graph.createEdge(null, null, null, null, null);
        return new mxCellState(this.graph.view, edge, this.graph.getCellStyle(edge))
      }

      // Specifies the default edge style
      const style = graph.getStylesheet().getDefaultEdgeStyle();
      style[mxConstants.STYLE_ROUNDED] = true;
      style[mxConstants.STYLE_STROKECOLOR] = '#3e75ff';
      style[mxConstants.STYLE_STROKEWIDTH] = '2';
      style['edgeStyle'] = 'orthogonalEdgeStyle'


      // Enables rubberband selection
				new mxRubberband(graph);

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

  }, [graph, mx]);

  return (<React.Fragment>graph</React.Fragment>)
}

export default GraphWrapper2;