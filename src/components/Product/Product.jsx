import React from 'react';
import Styled from './Product.style'

const Product = ({ product }) => {
  return (
    <Styled.Product>
      <Styled.Title>{product.title}</Styled.Title>
      <Styled.Image
        alt={product.title}
        src={product.image_url}
      />
      <Styled.Price>{product.price/100}€</Styled.Price>

      <Styled.Label>Features</Styled.Label>
      <Styled.Text
        dangerouslySetInnerHTML={{ __html: product.excerpt || '-' }}
      />

      <Styled.Label>Description</Styled.Label>
      <Styled.Text
        dangerouslySetInnerHTML={{ __html: product.description || '-' }}
      />
    </Styled.Product>
  );
};

export default Product;