import styles from './App.module.css';

import GridBoard from '../GridBoard';
import NextBlock from '../NextBlock';
import Scoreboard from '../Scoreboard';
import Controls from '../Controls';
import MessagePopup from '../MessagePopup';

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <h1 className="App-title">
          Tetris Redux
        </h1>
      </header>
      <GridBoard />
      <NextBlock />
      <Scoreboard  score={1} />
      <Controls />
      <MessagePopup />
    </div>
  );
}

export default App;
