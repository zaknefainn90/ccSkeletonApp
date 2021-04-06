import { all } from 'redux-saga/effects';
import gamesSaga from '@components/Games/store/sagas';

export default function* rootSaga() {
  yield all([
    gamesSaga(),
  ]);
}
