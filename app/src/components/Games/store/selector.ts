import { createSelector } from 'reselect';
import { RootState } from '@redux/reducer';
import { State } from '../types';

const getGamesState = (state: RootState) => state.games;

export const getGamesList = createSelector(
  getGamesState,
  (gamesState: State) => gamesState.list,
);

export const getGamesProgressState = createSelector(
  getGamesState,
  (gamesState: State) => gamesState.progressState,
);
