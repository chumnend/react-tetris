import styles from './Scoreboard.module.css';

interface Props {
  score: number;
}

const Scoreboard = (props: Props) => {
  const handleClick = () => {}

  return (
    <div className={styles.Scoreboard}>
      <div>Score: {props.score}</div>
      <div>Level: 1</div>
      <button className={styles.Button} onClick={handleClick}>Play</button>
      <button className={styles.Button} onClick={handleClick}>Restart</button>
    </div>
  );
}

export default Scoreboard;
