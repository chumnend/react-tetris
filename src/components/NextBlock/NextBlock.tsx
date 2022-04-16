import { useSelector } from 'react-redux';

import GridSquare from '../GridSquare';
import { IRootState } from '../../helpers/reducers';
import { shapes } from '../../helpers/utils';
import styles from './NextBlock.module.css';

const NextBlock = () => {
  const nextShape = useSelector((state: IRootState) => state.game.nextShape);
  const box = shapes[nextShape][0];

  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <GridSquare key={`${row}-${col}`} color={square} />;
    });
  });

  return <div className={styles.NextBlock}>{grid}</div>;
};

export default NextBlock;
