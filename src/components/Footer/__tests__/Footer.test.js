import React from 'react';
import { render } from '@testing-library/react';
import { AppProvider } from 'provider';
import Footer from '../Footer';

const setup = props => (
  <AppProvider>
    <Footer {...props} />
  </AppProvider>
);

describe('Footer component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {};
    wrapper = render(setup(props));
  });

  test('should match snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});