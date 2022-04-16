import { combineReducers } from 'redux';

import gameReducer from './game.reducer';

const reducers = combineReducers({
  game: gameReducer,
});

export type IRootState = ReturnType<typeof reducers>;

export default reducers;
