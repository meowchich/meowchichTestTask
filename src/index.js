import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import Root from './root';

import reducers from './reducers';
import actions from './actions';

import * as serviceWorker from './serviceWorker';

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
  ),
);

const user = localStorage.getItem('user');

if (user) {
  store.dispatch(actions.Login.loginSet(user))
}

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
