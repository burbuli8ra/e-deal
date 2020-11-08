import React from 'react';
import Styled from './Loader.style';

const Loader = () => {
  return (
    <Styled.Loader data-testid="loader">
      Loading...
    </Styled.Loader>
  );
};

export default Loader;