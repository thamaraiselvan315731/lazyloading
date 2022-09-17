import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';// eslint-disable-next-line 
import reportWebVitals from './reportWebVitals';// eslint-disable-next-line 
import { createStore, applyMiddleware } from 'redux'// eslint-disable-next-line 
import { Provider } from 'react-redux';
import rootReducers from '../src/Reducers/index'
const store = createStore(rootReducers)
const root = ReactDOM.createRoot(document.getElementById('root'));

//Giving an provider to access the redux store to entire applications

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
