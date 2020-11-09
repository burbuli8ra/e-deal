import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from 'theme';

const ProductBlock = styled(Link)`
  align-self: flex-start;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 0 9px 0 rgba(140, 140, 158, 0.25);
  color: ${colors.pastelBlue};
  display: inline-flex;
  flex: 1 0 auto;
  flex-direction: column;
  margin: 10px;
  max-width: 240px;
  overflow: hidden;
  padding: 20px;
  text-decoration: none;
`;
ProductBlock.displayName = 'ProductBlock';

const GhostImage = styled.img`
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
`;
GhostImage.displayName = 'GhostImage';

const Image = styled.img`
  margin-bottom: 10px;
  
  ${({ isVertical }) =>
    isVertical ? `
      height: 180px;
      width: auto;
    ` : `
      height: auto;
      width: 180px;
    `}
`;
Image.displayName = 'Image';

const ImageWrap = styled.div`
  align-items: center;
  display: flex;
  height: 180px;
  width: 100%;
  justify-content: center;
`;
ImageWrap.displayName = 'ImageWrap';

const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
Price.displayName = 'Price';

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  height: 38px;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
Title.displayName = 'Title';

export default {
  ProductBlock,
  GhostImage,
  Image,
  ImageWrap,
  Price,
  Title
};