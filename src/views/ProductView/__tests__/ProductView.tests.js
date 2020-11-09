import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import fetchRoute from 'api';
import Mocks from '__mocks__';
import { AppProvider } from 'provider';
import ProductView from '../ProductView';

const setup = props => (
  <AppProvider>
    <Router>
      <ProductView {...props} />
    </Router>
  </AppProvider>
);

describe('ProductView component', () => {
  let props;
  let wrapper;

  const getProduct = jest.spyOn(fetchRoute, 'product');

  beforeEach(() => {
    props = {};

    getProduct.mockImplementation(() => Mocks.Product);

    wrapper = render(setup(props));
  });

  test('should match snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});