import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Mocks from '__mocks__';
import Product from '../Product';

const setup = props => (
  <Router>
    <Product {...props} />
  </Router>
);

describe('Product component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = { product: Mocks.Product };
    wrapper = render(setup(props));
  });

  test('should match snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});