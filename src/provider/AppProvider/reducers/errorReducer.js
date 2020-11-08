const errorReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ERROR':
      return payload;
    case 'RESET_ERROR':
      return '';
    default:
      return state;
  }
};

export default errorReducer;