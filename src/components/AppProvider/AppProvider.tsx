import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../../helpers/reducers';

interface Props {
  children: React.ReactNode;
}

const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const AppProvider = (props: Props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
} 

export default AppProvider;
