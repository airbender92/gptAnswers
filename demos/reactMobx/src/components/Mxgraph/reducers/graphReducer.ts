
function graphReducer(state, action) {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        graph: action.graph
      };

    default:
      throw new Error();
  }
}

export { graphReducer}