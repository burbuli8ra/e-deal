import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchRoute from 'api';
import { Pagination, ProductsList } from 'components';
import { useAppContext } from 'provider';
import { withLoader } from 'hoc';

const ProductsListWithLoader = withLoader(ProductsList);

// @todo move to constants file
// For the moment a constants file has not been created
// since only one constant is used only in this scope
const PRODUCTS_PER_PAGE = 15;

const ProductsListView = () => {
  const [categoryItems, setCategoryItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingCategory, setIsLoadingCategory] = useState(true);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const [{ isPageLoading }, appDispatch] = useAppContext();
  const { categoryId } = useParams();

  const getCategoryDetails = async () => {
    appDispatch({ type: 'SET_IS_LOADING' });
    const response = await fetchRoute.category(categoryId);
    return response;
  };

  const getProductsList = async () => {
    const response = await fetchRoute.productsList(categoryId, {
      page: currentPage,
      limit: PRODUCTS_PER_PAGE
    });
    return response;
  }

  const handlePageClick = page => {
    setCurrentPage(page);

    // @todo remove on filters implementation
    console.log('maxPrice', maxPrice);
    console.log('minPrice', minPrice);
  };

  useEffect(() => {
    getCategoryDetails()
      .then(response => {

        // Error handling
        if (response.hasOwnProperty('error')) {
          appDispatch({ type: 'RESET_IS_LOADING' });
          appDispatch({
            type: 'SET_ERROR',
            payload: response.error
          });
          return;
        }

        setCategoryItems(response.products_count);
        setMaxPrice(response.price_max);
        setMinPrice(response.price_min);
        setIsLoadingCategory(false);
      })
  }, []);

  useEffect(() => {
    // Ensure that it will run only
    // if category details are fetched
    if (!isLoadingCategory) {
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

          setProducts(sortedResponse);

          if (sortedResponse.length > 0) {
            appDispatch({ type: 'RESET_ERROR' });
            return;
          }

          appDispatch({
            type: 'SET_ERROR',
            payload: 'No items found in this category'
          });
        })
    }
  }, [currentPage, isLoadingCategory]);

  return (
    <>
      <ProductsListWithLoader
        isLoading={isPageLoading}
        products={products}
      />
      {!isPageLoading ? (
        <Pagination
          currentPage={currentPage}
          onClick={handlePageClick}
          pageItems={PRODUCTS_PER_PAGE}
          totalItems={categoryItems}
        />
      ) : null}
    </>
  );
};

export default ProductsListView;