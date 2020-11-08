import React from 'react';
import Styled from './Header.style';

const Header = () => {
  return (
    <Styled.Header data-testid="header">
      <Styled.Logo data-testid="header-logo" to="/">
        <Styled.Icon data-testid="header-icon" />
        eDeal
      </Styled.Logo>
    </Styled.Header>
  );
};

export default Header;