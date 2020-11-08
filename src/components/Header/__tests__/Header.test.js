import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../Header';

const setup = props => (
  <Router>
    <Header {...props} />
  </Router>
);

describe('Header component', () => {
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