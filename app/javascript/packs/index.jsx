import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import thunkMiddleware  from 'redux-thunk';

import './app.scss';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    ),
    document.body.appendChild(document.createElement('div')),
  )
});