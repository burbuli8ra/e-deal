import React from 'react';
import { render } from '@testing-library/react';
import ProductsListOptions from '../ProductsListOptions';

const setup = props => <ProductsListOptions {...props} />;

describe('ProductsListOptions component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      categoryMaxPrice: 10000,
      categoryMinPrice: 1000,
      onMaxPriceUpdate: jest.fn(),
      onMinPriceUpdate: jest.fn(),
      onOrderByUpdate: jest.fn(),
      onOrderTypeUpdate: jest.fn(),
      orderByOptions: [
        { label: 'price', value: 'Price' },
        { label: 'title', value: 'Title' }
      ],
      orderByValue: 'price',
      orderTypeOptions: [
        { label: 'asc', value: 'Ascending' },
        { label: 'dec', value: 'Descending' }
      ],
      orderTypeValue: 'asc'
    };
    wrapper = render(setup(props));
  });

  test('should match snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});