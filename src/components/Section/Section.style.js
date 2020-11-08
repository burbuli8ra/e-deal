import styled from '@emotion/styled';
import { colors } from 'theme';

const Main = styled.main`
  align-items: center;
  background-color: ${colors.lightGrey};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: calc(100% - ${({ headerHeight, footerHeight }) => headerHeight + footerHeight}px);
  padding: 20px;
`;
Main.displayName = 'Main';

export default {
  Main
};