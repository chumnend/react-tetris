import * as ACTIONS from '../actions';
import { type ActionType } from '../actions';
import { defaultState } from '../utils';


const gameReducer = (state = defaultState(), action: ActionType) => {
  switch(action.type) {
    case ACTIONS.MOVE_LEFT:
      return state;
    case ACTIONS.MOVE_RIGHT:
      return state;
    case ACTIONS.MOVE_DOWN:
      return state;
    case ACTIONS.ROTATE:
      return state;
    case ACTIONS.PAUSE:
      return state;
    case ACTIONS.RESUME:
      return state;
    case ACTIONS.RESTART:
      return state;
    default:
      return state;
  }
}

export default gameReducer;
