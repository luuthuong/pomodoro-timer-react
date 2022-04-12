import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

document.title="Pomodoro Timer"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
