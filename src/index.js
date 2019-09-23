import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';
import * as serviceWorker from './serviceWorker';
import './styles/main.css';

const rootEl = document.getElementById('root');

ReactDOM.render(<AppRouter />, rootEl);

//HMR
if (module.hot) {
  module.hot.accept('./Router', () => {
    const { AppRouter: NextApp } = require('./Router').default;

    console.log('Module');
    ReactDOM.render(<NextApp />, rootEl);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
