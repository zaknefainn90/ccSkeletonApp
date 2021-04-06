import { ProgressState } from '@dataTypes/index';

export enum GamesActions {
  FETCH_GAME_LIST = 'games:FETCH_GAME_LIST',
  FETCH_GAME_LIST_SUCCESS = 'games:FETCH_GAME_LIST_SUCCESS',
  FETCH_GAME_LIST_ERROR = 'games:FETCH_GAME_LIST_ERROR'
}

export interface FetchGameListAction {
  type: typeof GamesActions.FETCH_GAME_LIST
}

export interface FetchGameListSuccessAction {
  type: typeof GamesActions.FETCH_GAME_LIST_SUCCESS,
  list: Game[]
}

export interface FetchGameListErrorAction {
  type: typeof GamesActions.FETCH_GAME_LIST_ERROR,
  error: string
}

export type GamesActionsTypes = FetchGameListAction | FetchGameListSuccessAction | FetchGameListErrorAction;

export interface Game {
  id: number;
  title: string;
  body: string;
}

export type State = {
  readonly list: Game[];
  readonly progressState: ProgressState;
  readonly error?: string;
}
