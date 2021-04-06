import { ProgressState } from '@dataTypes/index';
import { createReducer } from '@utils/store';
import { initialState } from './state';
import {
  State, GamesActions, GamesActionsTypes, FetchGameListSuccessAction, FetchGameListErrorAction,
} from '../types';

export function fetchGameListReducer(state: State) {
  return {
    ...state,
    progressState: ProgressState.PENDING,
  };
}

export function fetchGameListSuccessReducer(state: State, action: FetchGameListSuccessAction) {
  return {
    ...state,
    progressState: ProgressState.RESOLVED,
    list: action.list,
  };
}

export function fetchGameListErrorReducer(state: State, action: FetchGameListErrorAction) {
  return {
    ...state,
    progressState: ProgressState.REJECTED,
    error: action.error,
  };
}

export default createReducer<GamesActionsTypes, State>(initialState, {
  [GamesActions.FETCH_GAME_LIST]: fetchGameListReducer,
  [GamesActions.FETCH_GAME_LIST_SUCCESS]: fetchGameListSuccessReducer,
  [GamesActions.FETCH_GAME_LIST_ERROR]: fetchGameListErrorReducer,
});
