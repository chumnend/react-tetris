import React from 'react';

import GridSquare from "../GridSquare";
import styles from './GridBoard.module.css';

const GridBoard = () => {

  const grid: React.ReactChild[][] = [];
  for (let row = 0; row < 18; row++) {
    grid.push([]);
    for (let col = 0; col < 10; col++) {
      grid[row].push(
        <GridSquare color={1} />
      )
    }
  }

  return (
    <div className={styles.GridBoard}>
      {grid}
    </div>
  );
}

export default GridBoard;
