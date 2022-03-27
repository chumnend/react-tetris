import * as ACTIONS from '../actions';
import { type ActionType } from '../actions';
import { defaultState, nextRotation, canMoveTo} from '../utils';


const gameReducer = (state = defaultState(), action: ActionType) => {
  const {shape, grid, x, y, rotation} = state;

  switch(action.type) {
    case ACTIONS.MOVE_LEFT:
      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
        return { ...state, x: x - 1 };
      }
      return state;
    case ACTIONS.MOVE_RIGHT:
      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        return { ...state, x: x + 1 };
      }
      return state;
    case ACTIONS.MOVE_DOWN:
      return state;
    case ACTIONS.ROTATE:
      const newRotation = nextRotation(shape, rotation);
      if (canMoveTo(shape, grid, x, y, newRotation)) {
        return { ...state, rotation: newRotation };
      }
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
