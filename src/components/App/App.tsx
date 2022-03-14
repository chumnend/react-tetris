import styles from './App.module.css';

import GridBoard from '../GridBoard';

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <h1 className="App-title">
          Tetris Redux
        </h1>
      </header>
      <GridBoard />
    </div>
  );
}

export default App;
