/* eslint-disable camelcase */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchRoute from 'api';
import { Pagination, ProductsList, ProductsListOptions } from 'components';
import { useAppContext } from 'provider';
import { withLoader } from 'hoc';

const ProductsListWithLoader = withLoader(ProductsList);

// @todo move to constants file
// For the moment a constants file has not been created
// since only one constant is used only in this scope
const PRODUCTS_PER_PAGE = 15;
const ORDER_BY_OPTIONS = [
  { label: 'Price', value: 'price' },
  { label: 'Title', value: 'title' }
];
const ORDER_TYPE_OPTIONS = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' }
];

const ProductsListView = () => {
  const [categoryItems, setCategoryItems] = useState(0);
  const [categoryMaxPrice, setCategoryMaxPrice] = useState(0);
  const [categoryMinPrice, setCategoryMinPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersMaxPrice, setFiltersMaxPrice] = useState(0);
  const [filtersMinPrice, setFiltersMinPrice] = useState(0);
  const [isLoadingCategory, setIsLoadingCategory] = useState(true);
  const [orderBy, setOrderBy] = useState('price');
  const [orderType, setOrderType] = useState('asc');
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
      limit: PRODUCTS_PER_PAGE,
      min_price: filtersMinPrice || categoryMinPrice,
      max_price: filtersMaxPrice || categoryMaxPrice,
      sort: orderBy,
      order: orderType
    });
    return response;
  }

  const handlePageClick = page => setCurrentPage(page);

  useEffect(() => {
    // Route of category details does not accept filtering
    // parameters in order to respond with correct data
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
        setCategoryMaxPrice(response.price_max);
        setCategoryMinPrice(response.price_min);
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

          setProducts(response);

          if (response.length > 0) {
            appDispatch({ type: 'RESET_ERROR' });
            return;
          }

          appDispatch({
            type: 'SET_ERROR',
            payload: 'No items found in this category'
          });
        })
    }
  }, [
    currentPage,
    filtersMaxPrice,
    filtersMinPrice,
    isLoadingCategory,
    orderBy,
    orderType
  ]);

  return (
    <>
      {!isPageLoading ? (
        <ProductsListOptions
          categoryMaxPrice={categoryMaxPrice}
          categoryMinPrice={categoryMinPrice}
          orderByOptions={ORDER_BY_OPTIONS}
          orderByValue={orderBy}
          orderTypeOptions={ORDER_TYPE_OPTIONS}
          orderTypeValue={orderType}
          onMaxPriceUpdate={setFiltersMaxPrice}
          onMinPriceUpdate={setFiltersMinPrice}
          onOrderByUpdate={setOrderBy}
          onOrderTypeUpdate={setOrderType}
        />
      ) : null}
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