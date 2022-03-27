import * as ACTIONS from '../actions';
import { type ActionType } from '../actions';
import { defaultState, randomShape, nextRotation, canMoveTo, addBlockToGrid, checkRows } from '../utils';


const gameReducer = (state = defaultState(), action: ActionType) => {
  const { shape, grid, x, y, rotation, nextShape, score, isRunning } = state;

  switch (action.type) {
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
      // check if current block can move to potential position
      const maybeY = y + 1;
      if (canMoveTo(shape, grid, x, maybeY, rotation)) {
        return { ...state, y: maybeY };
      }

      // if not, place the block
      const newGrid = addBlockToGrid(shape, grid, x, y, rotation);

      // reset some thing to state a new shape/block
      const newState = defaultState();
      newState.grid = newGrid;
      newState.shape = nextShape;
      newState.nextShape = randomShape();
      newState.score = score;
      newState.isRunning = isRunning;

      if (!canMoveTo(nextShape, newGrid, 0, 4, 0)) {
        // Game Over
        console.log("Game should be over?");
        newState.shape = 0;
        return { ...state, gameOver: true }
      }

      newState.score = score + checkRows(newGrid);

      return newState;
    case ACTIONS.ROTATE:
      const newRotation = nextRotation(shape, rotation);
      if (canMoveTo(shape, grid, x, y, newRotation)) {
        return { ...state, rotation: newRotation };
      }
      return state;
    case ACTIONS.PAUSE:
      return { ...state, isRunning: false };
    case ACTIONS.RESUME:
      return { ...state, isRunning: true };
    case ACTIONS.RESTART:
      return state;
    default:
      return state;
  }
}

export default gameReducer;
