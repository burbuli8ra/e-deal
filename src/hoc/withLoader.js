import React from 'react';
import { Loader } from 'components';

const withLoader = Component => ({ isLoading, ...props }) =>
  isLoading ? <Loader /> : <Component {...props} />;

export default withLoader;