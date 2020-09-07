import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Subscribe } from 'unstated';
import AppContainer from './containers/AppContainer';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider>
    <Subscribe to={[AppContainer]}>{(store) => <App store={store} />}</Subscribe>
  </Provider>,
  document.getElementById('root'),
);
