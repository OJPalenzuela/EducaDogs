import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRoute';
import { store } from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  
  document.getElementById('root')
);
