import { fetchGameListReducer, fetchGameListSuccessReducer, fetchGameListErrorReducer } from '../reducers';
import { State, GamesActions, GamesActionsTypes } from '../../types';
import { initialState } from '../state';
import { ProgressState } from '@dataTypes/index';


describe('components/Games/reducers', () => {
  it('fetchGameListReducer()', () => {
    const expectState: State = {
      ...initialState,
      progressState: ProgressState.PENDING,
    };

    expect(fetchGameListReducer(initialState)).toEqual(expectState);
  });

  it('fetchGameListSuccessReducer()', () => {
    const action: GamesActionsTypes = {
      type: GamesActions.FETCH_GAME_LIST_SUCCESS,
      list: [],
    };
    const expectState: State = {
      ...initialState,
      progressState: ProgressState.RESOLVED,
      list: []
    };

    expect(fetchGameListSuccessReducer(initialState, action)).toEqual(expectState);
  });

  it('fetchGameListErrorReducer()', () => {
    const action: GamesActionsTypes = {
      type: GamesActions.FETCH_GAME_LIST_ERROR,
      error: 'error',
    };
    const expectState: State = {
      ...initialState,
      progressState: ProgressState.REJECTED,
      error: 'error'
    };

    expect(fetchGameListErrorReducer(initialState, action)).toEqual(expectState);
  });
})