import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

const setup = props => <App {...props} />;

describe('App Component', () => {
  let wrapper;
  const props = {};

  beforeEach(() => {
    wrapper = render(setup(props));
  });

  test('should match snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});