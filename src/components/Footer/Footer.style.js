import styled from '@emotion/styled';
import { colors } from 'theme';

const Footer = styled.footer`
  background-color: ${colors.white};
  box-shadow: 0 0 9px 0 rgba(140, 140, 158, 0.25);
  color: ${colors.darkPastelBlue};
  font-size: 14px;
  padding: 20px;
  text-align: center;
`;
Footer.displayName = 'Footer';

export default {
  Footer
};