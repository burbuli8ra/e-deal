import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchRoute from 'api';
import { useAppContext } from 'provider';
import { withLoader } from 'hoc';
import { Product } from 'components';

const ProductWithLoader = withLoader(Product);

const ProductView = () => {
  const [product, setProduct] = useState({});

  const [{ isPageLoading }, appDispatch] = useAppContext();
  const { productId } = useParams();

  const getProduct = async () => {
    appDispatch({ type: 'SET_IS_LOADING' });
    const response = await fetchRoute.product(productId);
    return response;
  }

  useEffect(() => {
    getProduct()
      .then(response => {
        appDispatch({ type: 'RESET_IS_LOADING' });

        // Error handling
        if (response.hasOwnProperty('error')) {
          setProduct({});
          appDispatch({
            type: 'SET_ERROR',
            payload: response.error
          });
          return;
        }

        appDispatch({ type: 'RESET_ERROR' });
        setProduct(response);
      })
  }, []);

  return (
    <ProductWithLoader
      product={product}
      isLoading={isPageLoading}
    />
  );
};

export default ProductView;