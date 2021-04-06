import { State } from '../types';
import { initialState } from '../store/state';
import { getGamesMockRequest } from './data';

export const mockStore: State = {
  ...initialState,
  list: getGamesMockRequest,
};
