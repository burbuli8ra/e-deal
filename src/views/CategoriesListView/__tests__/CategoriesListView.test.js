import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import fetchRoute from 'api';
import Mocks from '__mocks__';
import { AppProvider } from 'provider';
import CategoriesListView from '../CategoriesListView';

const setup = props => (
  <AppProvider>
    <Router>
      <CategoriesListView {...props} />
    </Router>
  </AppProvider>
);

describe('CategoriesListView component', () => {
  let props;
  let wrapper;

  const getCategories = jest.spyOn(fetchRoute, 'categoriesList')

  beforeEach(async () => {
    props = {};

    getCategories.mockImplementation(() => Mocks.CategoriesList);

    await act(async () => {
      wrapper = render(setup(props));
    });
  });

  test('should match snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});