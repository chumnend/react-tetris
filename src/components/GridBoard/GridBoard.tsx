import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridSquare from '../GridSquare';
import { IRootState } from '../../helpers/reducers';
import { shapes } from '../../helpers/utils';
import styles from './GridBoard.module.css';
import { moveDown } from '../../helpers/actions';

const GridBoard = () => {
  const requestRef = useRef(0);
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);

  const { grid, shape, rotation, x, y, isRunning, speed } = useSelector((state: IRootState) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateRef.current);

    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  const block = shapes[shape][rotation];
  const blockColor = shape;

  const update = (time: number) => {
    requestRef.current = requestAnimationFrame(updateRef.current);
    if (!isRunning) {
      return;
    }
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time;
    }
    const deltaTime = time - lastUpdateTimeRef.current;
    progressTimeRef.current += deltaTime;
    if (progressTimeRef.current > speed) {
      dispatch(moveDown());
      progressTimeRef.current = 0;
    }
    lastUpdateTimeRef.current = time;
  };

  const updateRef = useRef(update);

  // map rows
  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      // Find the block x and y on the shape grid
      // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
      const blockX = col - x;
      const blockY = row - y;
      let color = square;

      // Map current falling block to grid.
      // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
      if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
        color = block[blockY][blockX] === 0 ? color : blockColor;
      }

      // Generate a unique key for every block
      const k = row * grid[0].length + col;

      // Generate a grid square
      return <GridSquare key={k} color={color} />;
    });
  });

  return <div className={styles.GridBoard}>{gridSquares}</div>;
};

export default GridBoard;
