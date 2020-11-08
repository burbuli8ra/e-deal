const componentHeightsReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_HEADER_HEIGHT':
      return {
        ...state,
        header: payload
      };
    case 'SET_FOOTER_HEIGHT':
      return {
        ...state,
        footer: payload
      };
    default:
      return state;
  }
};

export default componentHeightsReducer;