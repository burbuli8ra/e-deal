import React from 'react';
import { useAppContext } from 'provider';
import Styled from './Section.style';

const Section = ({ children }) => {
  const [{ componentHeights: { header, footer } }] = useAppContext();

  return (
    <Styled.Main
      data-testid="main"
      headerHeight={header}
      footerHeight={footer}
    >
      {children}
    </Styled.Main>
  );
};

export default Section;