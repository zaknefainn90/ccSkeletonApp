import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { handleGetGames } from '../sagas';
import { getGamesList } from '../service';
import { fetchGameListSuccessAction } from '../actions';

describe("components/games/sagas", () => {
  const it = sagaHelper(handleGetGames() as any);

  it('should have called the mock API function', (result) => {
    expect(result).toEqual(call(getGamesList));
  });

  it('next should trigger action', (result) => {
    expect(result).toEqual(put(fetchGameListSuccessAction()));
  });
});