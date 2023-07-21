import * as React from 'react';
import { GraphContext } from '@/components/Mxgraph/reducers/graphContext';

const { useEffect, useContext } = React;

const GraphWrapper = () => {
  const { state } = useContext(GraphContext);
  const { graph, mx } = state;

  // Function to set up the default key handler
  const setupKeyHandler = () => {
    const { mxKeyHandler } = mx;

    const keyHandler = new mxKeyHandler(graph);

    // Custom key bindings (Example: Ctrl+D for delete)
    keyHandler.bindKey(46, function (evt) {
      if (graph.isEnabled()) {
        graph.removeCells();
      }
    });

    return keyHandler;
  };

  const insertNodeByXml = () => {
    const doc = mx.mxUtils.createXmlDocument();
    const node = doc.createElement('MyNode');
    node.setAttribute('label', 'MyLabel');
    node.setAttribute('attribute1', 'value1');
    graph.insertVertex(graph.getDefaultParent(), null, node, 340, 40, 80, 30);
  };

  const mouseOverListener = (sender, evt) => {
      const highlight = new mx.mxCellHighlight(graph, '#ff0000', 2);
    console.log('sender', evt.getProperty('event'));
    const cell = evt.getProperty('cell');
    if (cell) {
      console.log('Mouse over cell with ID:' + cell.getId());
      const state = graph.view.getState(cell);
      highlight.highlight(state);
    }
  };

  const mouseOutListener = (sender, evt) => {
    const cell = evt.getProperty('cell');
    if (cell) {
    }
  };

  const handleMxCell = () => {
    const { mxCell, mxEvent } = mx;
    // 创建一个新的mxCell对象
    const cell = new mxCell();
    cell.setGeometry(new mx.mxGeometry(0, 0, 80, 30));
    cell.setStyle('shape=ellipse;fillColor=#FF0000');
    // 设置cell的ID和值
    cell.setId('cell1');
    cell.setValue('Hello, mxCell');

    // 设置cell 为一个顶点（节点）
    cell.setVertex(true);

    // 创建一个父级cell作为容器
    const parent = new mxCell();
    parent.setId('parentCell');
    parent.setValue('Hello, P');
    parent.setVertex(true);
    parent.setStyle('shape=ellipse;fillColor=#3e75ff');
    parent.setGeometry(new mx.mxGeometry(300, 10, 120, 80));

    // 添加cell到父级容器
    parent.insert(cell);

    // 添加parent 到画布
    graph.addCell(parent, graph.getDefaultParent());

    graph.addListener(mxEvent.MOUSE_OVER, mouseOverListener);
    graph.addListener(mxEvent.MOUSE_OUT, mouseOutListener);
  };

  useEffect(() => {
    if (graph && mx) {
      const { mxEvent, mxCellState, mxConstants, mxRubberband, mxUtils } = mx;
      // Disables the built-in context menu to prevent conflicts
      mxEvent.disableContextMenu(graph.container);

      // Enable rubberband selection
      new mxRubberband(graph);

      setupKeyHandler();

      insertNodeByXml();

      handleMxCell();

      // Enables connect preview for the default edge style
      graph.connectionHandler.createEdgeState = function (me) {
        const edge = graph.createEdge(null, null, null, null, null);
        return new mxCellState(
          this.graph.view,
          edge,
          this.graph.getCellStyle(edge)
        );
      };

      // Specifies the default edge style
      const style = graph.getStylesheet().getDefaultEdgeStyle();
      style[mxConstants.STYLE_ROUNDED] = true;
      style[mxConstants.STYLE_STROKECOLOR] = '#3e75ff';
      style[mxConstants.STYLE_STROKEWIDTH] = '2';
      style['edgeStyle'] = 'orthogonalEdgeStyle';

      // Enables rubberband selection
      new mxRubberband(graph);

      graph.setConnectableEdges(false);

      graph.handleChangeModel(function () {
        // Adds cells to the graph
        const parent = graph.getDefaultParent();
        const v1 = graph.insertVertex(parent, null, 'Start', 20, 20, 80, 30);
        const v2 = graph.insertVertex(parent, null, 'End', 200, 150, 80, 30);
        graph.insertEdge(parent, null, '', v1, v2);
      });

      const cell1 = new mx.mxCell(
        'Cell 1',
        new mx.mxGeometry(20, 40, 80, 30),
        'rounded=1;fillColor=lightblue'
      );
      const cell2 = new mx.mxCell(
        'Cell 2',
        new mx.mxGeometry(120, 50, 80, 30),
        'rounded=1;fillColor=lightblue'
      );
      cell1.vertex = true;
      cell2.vertex = true;
      const model = graph.getModel();
      model.beginUpdate();
      try {
        const parent = graph.getDefaultParent();
        graph.addCell(cell1, parent);
        graph.addCell(cell1, parent);
      } finally {
        model.endUpdate();
      }
    }
  }, [graph, mx]);

  return <React.Fragment>graph</React.Fragment>;
};

export default GraphWrapper;
