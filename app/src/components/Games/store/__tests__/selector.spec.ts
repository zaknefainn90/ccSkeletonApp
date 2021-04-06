import { RootState } from '@redux/reducer';
import { ProgressState } from '@dataTypes/index';
import { getGamesList, getGamesProgressState } from '../selector';
import { mockStore } from '../../mocks/store';
import { getGamesMockRequest } from '../../mocks/data';


describe('components/games/selector', () => {
  const store: RootState = {
    games: mockStore
  }

  it('should return games list', () => {
    const result = getGamesList(store);

    expect(result).toBe(getGamesMockRequest);
  });

  it('should return games progressState', () => {
    const result = getGamesProgressState(store);

    expect(result).toBe(ProgressState.IDLE);
  });
});
