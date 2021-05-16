import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import initializeWebFont from './initializers/font'
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// #initializers
initializeWebFont()


ReactDOM.render(
  <Router>
    <Route path="/">
    <App />
    </Route>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
