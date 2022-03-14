import styles from './GridSquare.module.css';

export type ColorRange = 0|1|2|3|4|5|6|7;

export interface Props {
  /**
   * color of a tetris block
   * 0 - white
   * 1 - orange
   * 2- yellow
   * 3 - blue
   * 4 - purple
   * 5 - green
   * 6 - light blue
   * 7 - red 
  */
  color: ColorRange;
}

const GridSquare = (props: Props) => {
  return (
    <div className={`${styles.GridSquare} color-${props.color}`} />
  );
}

export default GridSquare;
