import { makeActionCreator } from '@utils/store';
import { GamesActions, GamesActionsTypes } from '../types';

const fetchGameListAction = makeActionCreator<GamesActionsTypes>(GamesActions.FETCH_GAME_LIST);
const fetchGameListSuccessAction = makeActionCreator<GamesActionsTypes>(GamesActions.FETCH_GAME_LIST_SUCCESS, 'list');
const fetchGameListErrorAction = makeActionCreator<GamesActionsTypes>(GamesActions.FETCH_GAME_LIST_ERROR, 'error');

export {
  fetchGameListAction,
  fetchGameListSuccessAction,
  fetchGameListErrorAction,
};
