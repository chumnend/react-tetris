import { useSelector } from 'react-redux';

import { IRootState } from '../../helpers/reducers';
import styles from './MessagePopup.module.css';

const MessagePop = () => {
  const { isRunning, gameOver } = useSelector((state: IRootState) => state.game);

  let message = '';
  let isHidden = true;

  if (gameOver) {
    message = 'Game Over';
    isHidden = false;
  } else if (!isRunning) {
    message = 'Paused';
    isHidden = false;
  }

  return (
    <div className={`${styles.MessagePopup} ${isHidden ? styles.Hidden : ''}`}>
      <h1>{message}</h1>
    </div>
  );
};

export default MessagePop;
