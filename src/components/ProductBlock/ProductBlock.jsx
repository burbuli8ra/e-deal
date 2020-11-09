import React, { useState } from 'react';
import Styled from './ProductBlock.style';

const ProductBlock = ({
  id,
  imageUrl,
  price,
  title
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [hasVerticalImage, setHasVerticalImage] = useState(false);

  const priceInEuros = (price/100).toFixed(2);

  const handleImageLoad = ({ currentTarget }) => {
    const { height, width } = currentTarget.getBoundingClientRect();
    if (height > width) {
      setHasVerticalImage(true);
    }
    setIsImageLoading(false);
  };

  return (
    <>
      {isImageLoading ? (
        <Styled.GhostImage
          alt={title}
          data-testid="productItem-ghost-image"
          onLoad={handleImageLoad}
          src={imageUrl}
        />
      ) : (
        <Styled.ProductBlock data-testid="productItem-block" to={`/products/${id}`}>
          <Styled.ImageWrap>
            <Styled.Image
              alt={title}
              isVertical={hasVerticalImage}
              src={imageUrl}
            />
          </Styled.ImageWrap>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Price>{priceInEuros}€</Styled.Price>
        </Styled.ProductBlock>
      )}
    </>
  );
};

export default ProductBlock;