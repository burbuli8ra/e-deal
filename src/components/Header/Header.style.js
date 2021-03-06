import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Assets from 'assets';
import { colors } from 'theme';

const Header = styled.header`
  background-color: ${colors.white};
  box-shadow: 0 0 9px 0 rgba(140, 140, 158, 0.25);
  padding: 20px;
  position: relative;
  text-align: center;
  z-index: 1;
`;
Header.displayName = 'Header';

const Icon = styled(Assets.Logo)`
  height: 28px;
  width: 28px;
  margin-right: 4px;
`;
Icon.displayName = 'Icon';

const Logo = styled.h1`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 0;
`;
Logo.displayName = 'Logo';

const LogoLink = styled(Link)`
  align-items: center;
  color: ${colors.darkPastelBlue};
  display: inline-flex;
  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
  vertical-align: top;
`;
LogoLink.displayName = 'LogoLink';

export default {
  Header,
  Icon,
  Logo,
  LogoLink
}