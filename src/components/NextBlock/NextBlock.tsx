import GridSquare from "../GridSquare";
import styles from './NextBlock.module.css';

interface Props {}

const NextBlock = (props: Props) => {
  const box = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <GridSquare key={`${row}-${col}`} color={square} />
    })
  });

  return (
    <div className={styles.NextBlock}>
      {grid}
    </div>
  );
}

export default NextBlock;
