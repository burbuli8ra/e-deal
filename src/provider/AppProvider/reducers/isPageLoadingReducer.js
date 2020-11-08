const isPageLoadingReducer = (state, { type }) => {
  switch (type) {
    case 'SET_IS_LOADING':
      return true;
    case 'RESET_IS_LOADING':
      return false;
    default:
      return state;
  }
};

export default isPageLoadingReducer;