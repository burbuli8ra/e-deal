import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import Mocks from '__mocks__';
import ProductBlock from '../ProductBlock';

const setup = props => (
  <Router>
    <ProductBlock {...props} />
  </Router>
);

describe('ProductBlock component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = Mocks.ProductItem;
    wrapper = render(setup(props));
  });

  test('should match product ghost image snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should match product block snapshot', () => {
    const { asFragment, getByTestId } = wrapper;
    fireEvent.load(getByTestId('productItem-ghost-image'));
    expect(asFragment()).toMatchSnapshot();
  });
});