import { combineReducers } from 'redux';
import gamesReducer from '@components/Games/store/reducers';

const rootReducer = combineReducers({
  games: gamesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
