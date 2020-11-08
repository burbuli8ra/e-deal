import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Assets from 'assets';
import { colors } from 'theme';

const Header = styled.header`
  background-color: ${colors.white};
  box-shadow: 0 0 9px 0 rgba(140, 140, 158, 0.25);
  padding: 20px;
  text-align: center;
`;
Header.displayName = 'Header';

const Icon = styled(Assets.Logo)`
  height: 28px;
  width: 28px;
  margin-right: 4px;
`;
Icon.displayName = 'Icon';

const Logo = styled(Link)`
  align-items: center;
  color: ${colors.pastelBlue};
  display: inline-flex;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;
Logo.displayName = 'Logo';

export default {
  Header,
  Icon,
  Logo
}