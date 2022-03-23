import { useSelector, useDispatch } from 'react-redux';

import { moveDown, moveLeft, moveRight, rotate } from '../../helpers/actions';
import { IRootState } from '../../helpers/reducers';
import styles from './Controls.module.css';

const Controls = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state: IRootState) => state.game.isRunning);

  const handleLeft = () => {
    dispatch(moveLeft());
  }

  const handleRight = () => {
    dispatch(moveRight());
  }

  const handleDown = () => {
    dispatch(moveDown());
  }

  const handleRotate = () => {
    dispatch(rotate());
  }

  return (
    <div className={styles.Controls}>
      <button className={styles.Button} onClick={handleLeft}>Left</button>
      <button className={styles.Button} onClick={handleRight}>Right</button>
      <button className={styles.Button} onClick={handleDown}>Rotate</button>
      <button className={styles.Button} onClick={handleRotate}>Down</button>
    </div>
  );
}

export default Controls;
