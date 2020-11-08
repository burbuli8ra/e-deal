import React from 'react';
import { render } from '@testing-library/react';
import { AppProvider } from 'provider';
import Section from '../Section';

const setup = props => (
  <AppProvider>
    <Section {...props}>
      Section content
    </Section>
  </AppProvider>
);

describe('Section component', () => {
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