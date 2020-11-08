import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../Loader';

const setup = props => <Loader {...props} />;

describe('Loader component', () => {
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