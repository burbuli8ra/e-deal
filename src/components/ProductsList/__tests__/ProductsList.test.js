import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import { AppProvider } from 'provider';
import Mocks from '__mocks__';
import ProductsList from '../ProductsList';

const setup = props => (
  <AppProvider>
    <Router>
      <ProductsList {...props} />
    </Router>
  </AppProvider>
);

describe('ProductsList component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      products: Mocks.ProductsList
    };
    wrapper = render(setup(props));
  });

  test('should match snapshot', () => {
    const { asFragment, getAllByTestId } = wrapper;

    getAllByTestId('productItem-ghost-image').forEach(img =>
      fireEvent.load(img)
    );

    expect(asFragment()).toMatchSnapshot();
  });
});