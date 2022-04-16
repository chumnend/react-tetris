import { useSelector, useDispatch } from 'react-redux';

import { pause, resume, restart } from '../../helpers/actions';
import { IRootState } from '../../helpers/reducers';
import styles from './Scoreboard.module.css';

const Scoreboard = () => {
  const { score, isRunning, gameOver } = useSelector((state: IRootState) => state.game);
  const dispatch = useDispatch();

  const handlePlay = () => {
    if (gameOver) {
      return;
    }

    if (isRunning) {
      dispatch(pause());
    } else {
      dispatch(resume());
    }
  };

  const handleRestart = () => {
    dispatch(restart());
  };

  return (
    <div className={styles.Scoreboard}>
      <div>Score: {score}</div>
      <div>Level: 1</div>
      <button className={styles.Button} onClick={handlePlay}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
      <button className={styles.Button} onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default Scoreboard;
