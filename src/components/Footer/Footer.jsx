import React from 'react';
import Styled from './Footer.style';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Styled.Footer data-testid="footer">
      {currentYear} © eDeal
    </Styled.Footer>
  );
};

export default Footer;