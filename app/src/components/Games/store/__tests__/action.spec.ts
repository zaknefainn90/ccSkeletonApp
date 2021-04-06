import { fetchGameListAction, fetchGameListSuccessAction, fetchGameListErrorAction } from '../actions';
import { GamesActions, GamesActionsTypes} from '../../types';

describe('components/Games/actions', () => {
  it('fetchGameListAction()', () => {
    const expectedAction: GamesActionsTypes = {
      type: GamesActions.FETCH_GAME_LIST
    }

    expect(fetchGameListAction()).toEqual(expectedAction);
  });

  it('fetchGameListSuccessAction()', () => {
    const expectedAction: GamesActionsTypes = {
      type: GamesActions.FETCH_GAME_LIST_SUCCESS,
      list: []
    }

    expect(fetchGameListSuccessAction([])).toEqual(expectedAction);
  });

  it('fetchGameListSuccessAction()', () => {
    const expectedAction: GamesActionsTypes = {
      type: GamesActions.FETCH_GAME_LIST_ERROR,
      error: "No Games in DB"
    }

    expect(fetchGameListErrorAction("No Games in DB")).toEqual(expectedAction);
  });
});
