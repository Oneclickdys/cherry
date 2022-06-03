import React from 'react';
import ReactDOM from 'react-dom';
import 'react-lemonade-editor/dist/index.css';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log('version: ', process.env.npm_package_version);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
