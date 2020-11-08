import React, { useLayoutEffect } from 'react';
import { useAppContext } from 'provider';
import { useDimensions } from 'hooks';
import Styled from './Footer.style';

const Footer = () => {
  const [, appDispatch] = useAppContext();
  const [ref, { height }] = useDimensions();

  const currentYear = new Date().getFullYear();

  useLayoutEffect(() => {
    appDispatch({
      type: 'SET_FOOTER_HEIGHT',
      payload: height
    })
  }, [height]);

  return (
    <Styled.Footer data-testid="footer" ref={ref}>
      {currentYear} © eDeal
    </Styled.Footer>
  );
};

export default Footer;