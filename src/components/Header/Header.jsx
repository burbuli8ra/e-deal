import React, { useLayoutEffect } from 'react';
import { useAppContext } from 'provider';
import { useDimensions } from 'hooks';
import Styled from './Header.style';

const Header = () => {
  const [, appDispatch] = useAppContext();
  const [ref, { height }] = useDimensions();

  useLayoutEffect(() => {
    appDispatch({
      type: 'SET_HEADER_HEIGHT',
      payload: height
    })
  }, [height]);

  return (
    <Styled.Header data-testid="header" ref={ref}>
      <Styled.Logo data-testid="header-logo">
        <Styled.LogoLink data-testid="header-logo-link" to="/">
          <Styled.Icon data-testid="header-icon" />
          eDeal
        </Styled.LogoLink>
      </Styled.Logo>
    </Styled.Header>
  );
};

export default Header;