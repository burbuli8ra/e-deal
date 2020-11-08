import { appInitState } from '../../AppProvider';
import errorReducer from '../errorReducer';

describe('errorReducer reducer', () => {
  test('should return the initial state', () => {
    expect(errorReducer(
      appInitState.error, {}
    )).toEqual(appInitState.error);
  });

  test('should set error', () => {
    const payload = 'Error';

    expect(
      errorReducer(
        appInitState.error, {
          type: 'SET_ERROR',
          payload
        })
    ).toEqual(payload);
  });

  test('should reset error', () => {
    const errorState = 'Error';

    expect(
      errorReducer(errorState, { type: 'RESET_ERROR' })
    ).toEqual(appInitState.error);
  });
});