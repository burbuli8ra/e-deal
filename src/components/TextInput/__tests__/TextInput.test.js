import React from 'react';
import { render } from '@testing-library/react';
import TextInput from '../TextInput';

const setup = props => <TextInput {...props} />;

describe('TextInput component', () => {
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