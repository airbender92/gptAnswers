import * as React from 'react';
import { initialState, graphReducer, GraphContext } from './reducers';
import {  createInstance } from './utils/createInstance'

const { useEffect, useReducer, useMemo } = React;

const Mxgraph = ({ children, containerId }) => {

  const [state, dispatch] = useReducer(graphReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  useEffect(() => {
    if (containerId) {
      const graph = createInstance(containerId);
      dispatch({ type: 'init', graph })
    }
  }, [containerId])

  return (
  <GraphContext.Provider value={contextValue}>
    {children}
  </GraphContext.Provider>
);
}

export default Mxgraph
