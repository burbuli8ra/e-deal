import React, { useEffect, useState } from 'react';
import fetchRoute from 'api';
import { CategoriesList } from 'components';
import { useAppContext } from 'provider';
import { withLoader } from 'hoc';

const CategoriesListWithLoader = withLoader(CategoriesList);

const CategoriesListView = () => {
  const [categories, setCategories] = useState([]);

  const [{ isPageLoading }, appDispatch] = useAppContext();

  const getCategoriesList = async () => {
    appDispatch({ type: 'SET_IS_LOADING' });
    const response = await fetchRoute.categoriesList();
    return response;
  }

  useEffect(() => {
    getCategoriesList()
      .then(response => {
        appDispatch({ type: 'RESET_IS_LOADING' });

        // Error handling
        if (response.hasOwnProperty('error')) {
          setCategories([]);
          appDispatch({
            type: 'SET_ERROR',
            payload: response.error
          });
          return;
        }

        // Order items by position
        const sortedResponse = response.sort((a, b) =>
          a.position - b.position
        );

        appDispatch({ type: 'RESET_ERROR' });
        setCategories(sortedResponse);
      })
  }, []);

  return (
    <CategoriesListWithLoader
      categories={categories}
      isLoading={isPageLoading}
    />
  );
};

export default CategoriesListView;