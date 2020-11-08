import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Mocks from '__mocks__';
import CategoryBlock from '../CategoryBlock';

const setup = props => (
  <Router>
    <CategoryBlock {...props} />
  </Router>
);

describe('CategoryBlock component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = Mocks.CategoryItem;
    wrapper = render(setup(props));
  });

  test('should match snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});