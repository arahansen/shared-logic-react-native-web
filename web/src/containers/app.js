import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../../../app/reducers';
import TodoApp from './todoApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp

        />
      </Provider>
    );
  }
}
