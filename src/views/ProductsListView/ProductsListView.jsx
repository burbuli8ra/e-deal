import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchRoute from 'api';
import { ProductsList } from 'components';
import { useAppContext } from 'provider';
import { withLoader } from 'hoc';

const ProductsListWithLoader = withLoader(ProductsList);

const ProductsListView = () => {
  const [products, setProducts] = useState([]);

  const [{ isPageLoading }, appDispatch] = useAppContext();
  const { categoryId } = useParams();

  const getProductsList = async () => {
    appDispatch({ type: 'SET_IS_LOADING' });
    const response = await fetchRoute.productsList(categoryId);
    return response;
  }

  useEffect(() => {
    getProductsList()
      .then(response => {
        appDispatch({ type: 'RESET_IS_LOADING' });

        // Error handling
        if (response.hasOwnProperty('error')) {
          appDispatch({
            type: 'SET_ERROR',
            payload: response.error
          });
          setProducts([]);
          return;
        }

        // Order items by price
        const sortedResponse = response.sort((a, b) =>
          a.price - b.price
        );

        appDispatch({ type: 'RESET_ERROR' });
        setProducts(sortedResponse);
      })
  }, []);

  return (
    <ProductsListWithLoader
      isLoading={isPageLoading}
      products={products}
    />
  );
};

export default ProductsListView;