import { createStore } from 'redux';
import { Provider } from 'react-redux';

import GridBoard from '../GridBoard';
import NextBlock from '../NextBlock';
import Scoreboard from '../Scoreboard';
import Controls from '../Controls';
import MessagePopup from '../MessagePopup';
import reducers from '../../helpers/reducers';
import styles from './App.module.css';

const store = createStore(
  reducers,
  // Uncomment for development use only, when pushing to master make sure this line is commented out
  // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <header className={styles.Header}>
          <h1 className="App-title">Tetris Redux</h1>
        </header>
        <GridBoard />
        <NextBlock />
        <Scoreboard />
        <Controls />
        <MessagePopup />
      </div>
    </Provider>
  );
};

export default App;
