import React, { createContext, useContext, useReducer } from 'react';
import {
  componentHeightsReducer,
  errorReducer,
  isPageLoadingReducer
} from './reducers';

const appInitState = {
  componentHeights: {
    header: 0,
    footer: 0
  },
  error: '',
  isPageLoading: true
};

const appInitializer = () => ({
  ...appInitState
});

const AppContext = createContext(appInitState);

const appReducer = (state, action) => ({
  ...state,
  componentHeights: componentHeightsReducer(state.componentHeights, action),
  error: errorReducer(state.error, action),
  isPageLoading: isPageLoadingReducer(state.isPageLoading, action)
});

const AppProvider = ({ children }) => (
  <AppContext.Provider
    value={useReducer(appReducer, appInitState, appInitializer)}
  >
    {children}
  </AppContext.Provider>
);

const useAppContext = () => useContext(AppContext);

export {
  AppContext,
  appInitState,
  AppProvider,
  useAppContext
};