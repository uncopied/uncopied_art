import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from '../src/styles/global-styles'
import ReactNotification from 'react-notifications-component'
import { BrowserRouter as Router } from 'react-router-dom';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
	<Router>
      <ReactNotification />
      <App />
      <GlobalStyle/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
