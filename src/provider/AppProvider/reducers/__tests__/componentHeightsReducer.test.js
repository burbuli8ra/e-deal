import { appInitState } from '../../AppProvider';
import componentHeightsReducer from '../componentHeightsReducer';

describe('componentHeightsReducer reducer', () => {
  test('should return the initial state', () => {
    expect(componentHeightsReducer(
      appInitState.componentHeights, {}
    )).toEqual(appInitState.componentHeights);
  });

  test('should set header\'s height', () => {
    const payload = 72;

    expect(
      componentHeightsReducer(
        appInitState.componentHeights, {
          type: 'SET_HEADER_HEIGHT',
          payload
        })
    ).toEqual({
      ...appInitState.componentHeights,
      header: payload
    });
  });

  test('should set footer\'s height', () => {
    const payload = 56;

    expect(
      componentHeightsReducer(
        appInitState.componentHeights, {
          type: 'SET_FOOTER_HEIGHT',
          payload
        })
    ).toEqual({
      ...appInitState.componentHeights,
      footer: payload
    });
  });
});