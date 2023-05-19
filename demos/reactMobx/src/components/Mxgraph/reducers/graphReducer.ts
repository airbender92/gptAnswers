
function graphReducer(state, action) {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        mx: action.mx,
        graph: action.graph
      };
    default:
      return state;
  }
}

export { graphReducer}