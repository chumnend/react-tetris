import styles from './App.module.css';

import GridSquare from '../GridSquare';

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <h1 className="App-title">
          Tetris Redux
        </h1>
      </header>
      <GridSquare color={1} />
    </div>
  );
}

export default App;
