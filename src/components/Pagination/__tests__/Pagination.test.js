import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Pagination from '../Pagination';

const setup = props => <Pagination {...props} />;

describe('Pagination component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      currentPage: 1,
      onClick: jest.fn(),
      pageItems: 10,
      totalItems: 16
    };
    wrapper = render(setup(props));
  });

  test('should match snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should not call previous page', () => {
    const { getByTestId } = wrapper;

    fireEvent.click(getByTestId('page-prev'));
    expect(props.onClick).not.toHaveBeenCalled();
  });

  test('should call previous page', () => {
    const updatedProps = {
      ...props,
      currentPage: 2
    };
    const { getByTestId, rerender } = wrapper;

    rerender(setup(updatedProps));

    fireEvent.click(getByTestId('page-prev'));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  test('should not call next page', () => {
    const updatedProps = {
      ...props,
      currentPage: 2
    };
    const { getByTestId, rerender } = wrapper;

    rerender(setup(updatedProps));

    fireEvent.click(getByTestId('page-next'));
    expect(props.onClick).not.toHaveBeenCalled();
  });

  test('should call next page', () => {
    const { getByTestId } = wrapper;

    fireEvent.click(getByTestId('page-next'));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  test('should call page', () => {
    const { getAllByTestId } = wrapper;

    fireEvent.click(getAllByTestId('page-item')[0]);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  })
});