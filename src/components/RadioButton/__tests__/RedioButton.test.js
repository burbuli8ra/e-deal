import React from 'react';
import { render } from '@testing-library/react';
import RadioButton from '../RadioButton';

const setup = props => <RadioButton {...props} />;

describe('RadioButton component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      categoryMaxPrice: 10000,
      categoryMinPrice: 1000,
      onMaxPriceUpdate: jest.fn(),
      onMinPriceUpdate: jest.fn()
    };
    wrapper = render(setup(props));
  });

  test('should match snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});