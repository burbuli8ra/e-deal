import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { AppProvider } from 'provider';
import Mocks from '__mocks__';
import CategoriesList from '../CategoriesList';

const setup = props => (
  <AppProvider>
    <Router>
      <CategoriesList {...props} />
    </Router>
  </AppProvider>
);

describe('CategoriesList component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      categories: Mocks.CategoriesList
    };
    wrapper = render(setup(props));
  });

  test('should match snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});