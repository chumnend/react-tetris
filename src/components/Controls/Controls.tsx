import styles from './Controls.module.css';

const Controls = () => {
  const handleClick = () => {}

  return (
    <div className={styles.Controls}>
      <button className={styles.Button} onClick={handleClick}>Left</button>
      <button className={styles.Button} onClick={handleClick}>Right</button>
      <button className={styles.Button} onClick={handleClick}>Rotate</button>
      <button className={styles.Button} onClick={handleClick}>Down</button>
    </div>
  );
}

export default Controls;
