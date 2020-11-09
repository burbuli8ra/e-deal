import styled from '@emotion/styled';
import { colors } from 'theme';

const Label = styled.div`
  color: ${colors.pastelBlue};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
  text-decoration: underline;
`;
Label.displayName = 'Label';

const Image = styled.img`
  border-radius: 4px;
  height: auto;
  width: auto;
  margin-bottom: 30px;
  max-height: 320px;
  max-width: 320px;
`;
Image.displayName = 'Image';

const Price = styled.div`
  color: ${colors.darkPastelBlue};
  font-size: 36px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 30px;
`;
Price.displayName = 'Price';

const Product = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
`;
Product.displayName = 'Product';

const Title = styled.h2`
  color: ${colors.darkPastelBlue};
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 30px;
`;
Title.displayName = 'Title';

const Text = styled.div`
  color: ${colors.pastelBlue};
  margin-bottom: 30px;
  text-align: center;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  > * {
    &:first-of-type {
      margin-top: 0;
    }
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
Text.displayName = 'Text';

export default {
  Label,
  Image,
  Price,
  Product,
  Title,
  Text
};