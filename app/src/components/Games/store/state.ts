import { ProgressState } from '@dataTypes/index';
import { State } from '../types';

export const initialState: State = {
  list: [],
  progressState: ProgressState.IDLE,
};
