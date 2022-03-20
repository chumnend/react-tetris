import styles from './App.module.css';

import AppProvider from '../AppProvider';
import GridBoard from '../GridBoard';
import NextBlock from '../NextBlock';
import Scoreboard from '../Scoreboard';
import Controls from '../Controls';
import MessagePopup from '../MessagePopup';

const App = () => {
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
