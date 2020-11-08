import { appInitState } from '../../AppProvider';
import isPageLoadingReducer from '../isPageLoadingReducer';

describe('isPageLoading reducer', () => {
  test('should return the initial state', () => {
    expect(isPageLoadingReducer(
      appInitState.isPageLoading, {}
    )).toEqual(appInitState.isPageLoading);
  });

  test('should set page loading', () => {
    const isPageLoadingState = false;

    expect(
      isPageLoadingReducer(
        isPageLoadingState, { type: 'SET_IS_LOADING' })
    ).toEqual(true);
  });

  test('should set page not loading', () => {
    expect(
      isPageLoadingReducer(
        appInitState.isPageLoading, { type: 'RESET_IS_LOADING' })
    ).toEqual(false);
  });
});