import React from 'react';
import { ProductBlock } from 'components';
import { useAppContext } from 'provider';

const ProductsList = ({ products }) => {
  const [{ error }] = useAppContext();

  return (
    <>
      {error || products.map(product =>
        <ProductBlock
          imageUrl={product.image_url}
          key={`${product.id}-${product.slug_path}`}
          {...product}
        />
      )}
    </>
  );
};

export default ProductsList;