import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from 'theme';

const CategoryBlock = styled(Link)`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 0 9px 0 rgba(140, 140, 158, 0.25);
  color: ${colors.pastelBlue};
  display: inline-flex;
  flex-direction: column;
  font-weight: 700;
  margin: 10px;
  max-width: 300px;
  overflow: hidden;
  padding: 20px;
  text-decoration: none;
`;
CategoryBlock.displayName = 'CategoryBlock';

const Image = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: 10px;
`;
Image.displayName = 'Image';

export default {
  CategoryBlock,
  Image
};