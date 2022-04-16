export const MOVE_LEFT = 'MOVE_LEFT'; // Move piece left
export const MOVE_RIGHT = 'MOVE_RIGHT'; // Move piece right
export const MOVE_DOWN = 'MOVE_DOWN'; // Move piece down
export const ROTATE = 'ROTATE'; // Rotate piece
export const PAUSE = 'PAUSE'; // Pause the game
export const RESUME = 'RESUME'; // Resume a paused game
export const RESTART = 'RESTART'; // Restart Game
export const GAME_OVER = 'GAME_OVER'; // The game is over

export interface ActionType {
  type: string;
}

export const moveLeft = () => {
  return { type: MOVE_LEFT };
};

export const moveRight = () => {
  return { type: MOVE_RIGHT };
};

export const moveDown = () => {
  return { type: MOVE_DOWN };
};

export const rotate = () => {
  return { type: ROTATE };
};

export const pause = () => {
  return { type: PAUSE };
};

export const resume = () => {
  return { type: RESUME };
};

export const restart = () => {
  return { type: RESTART };
};
