import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../../helpers/reducers';

interface Props {
  children: React.ReactNode;
}

const store = createStore(reducers);

const AppProvider = (props: Props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
} 

export default AppProvider;
