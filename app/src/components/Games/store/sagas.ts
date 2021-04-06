import { call, takeEvery, put } from 'redux-saga/effects';
import { GamesActions, Game } from '../types';
import { fetchGameListErrorAction, fetchGameListSuccessAction } from './actions';
import { getGamesList } from './service';

export function* handleGetGames() {
  try {
    const list: Game[] = yield call(getGamesList);
    yield put(fetchGameListSuccessAction(list));
  } catch (error) {
    yield put(fetchGameListErrorAction(error.message));
  }
}

export default function* watchGamesFetch() {
  yield takeEvery(GamesActions.FETCH_GAME_LIST, handleGetGames);
}
