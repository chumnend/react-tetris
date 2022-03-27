import { useSelector, useDispatch } from 'react-redux';

import { moveDown, moveLeft, moveRight, rotate } from '../../helpers/actions';
import { IRootState } from '../../helpers/reducers';
import styles from './Controls.module.css';

const Controls = () => {
  const dispatch = useDispatch();
  const { isRunning, gameOver} = useSelector((state: IRootState) => state.game);

  const handleLeft = () => {
    if (!isRunning || gameOver) {
      return;
    }
    dispatch(moveLeft());
  }

  const handleRight = () => {
    if (!isRunning || gameOver) {
      return;
    }
    dispatch(moveRight());
  }

  const handleDown = () => {
    if (!isRunning || gameOver) {
      return;
    }
    dispatch(moveDown());
  }

  const handleRotate = () => {
    if (!isRunning || gameOver) {
      return;
    }
    dispatch(rotate());
  }

  return (
    <div className={styles.Controls}>
      <button className={styles.Button} disabled={!isRunning || gameOver} onClick={handleLeft}>Left</button>
      <button className={styles.Button} disabled={!isRunning || gameOver} onClick={handleRight}>Right</button>
      <button className={styles.Button} disabled={!isRunning || gameOver} onClick={handleRotate}>Rotate</button>
      <button className={styles.Button} disabled={!isRunning || gameOver} onClick={handleDown}>Down</button>
    </div>
  );
}

export default Controls;
