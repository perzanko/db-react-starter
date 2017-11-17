import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/Reducers';
import App from './containers/App';

require('./assets/styles/main.scss');

const store = createStore(reducer, applyMiddleware(thunk));

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('dumeo-app'));
