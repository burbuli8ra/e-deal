import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act, fireEvent, render } from '@testing-library/react';
import fetchRoute from 'api';
import Mocks from '__mocks__';
import { AppProvider } from 'provider';
import ProductsListView from '../ProductsListView';

const setup = props => (
  <AppProvider>
    <Router>
      <ProductsListView {...props} />
    </Router>
  </AppProvider>
);

describe('ProductsListView component', () => {
  let props;
  let wrapper;

  const getCategory = jest.spyOn(fetchRoute, 'category')
  const getProducts = jest.spyOn(fetchRoute, 'productsList')

  beforeEach(async () => {
    props = {};

    getCategory.mockImplementation(() => Mocks.Category);
    getProducts.mockImplementation(() => Mocks.ProductsList);

    await act(async () => {
      wrapper = render(setup(props));
    });
  });

  test('should match snapshot', () => {
    const { asFragment, getAllByTestId } = wrapper;

    getAllByTestId('productItem-ghost-image').forEach(img =>
      fireEvent.load(img)
    );

    expect(asFragment()).toMatchSnapshot();
  });
});