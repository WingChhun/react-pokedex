import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppRouter } from "./views";
import * as serviceWorker from './serviceWorker';


const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppRouter />,
  rootEl
);


//HMR
if (module.hot) {
  module.hot.accept('./views', () => {
    const { AppRouter: NextApp } = require("./views").default;

    console.log("Module");
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
