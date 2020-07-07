import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/index'
import {Add} from './components/Add'
import { Todolist } from './components/Todolist';
ReactDOM.render(
  <Provider store={store}>
    <Todolist/>
    <Add/>
  </Provider>,
  document.getElementById('root')
);

// If you want your< work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
