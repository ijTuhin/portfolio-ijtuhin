import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const downArrow = require('./image/icons/down-arrow.png');
export const portfolio = require('./image/profile/img1.jpeg');
export const projectI1 = require('./image/projects/Project-I-1.png');
export const projectI2 = require('./image/projects/Project-I-2.png');
export const projectI3 = require('./image/projects/Project-I-3.png');
export const projectII1 = require('./image/projects/Project-II-1.png');
export const projectII2 = require('./image/projects/Project-II-2.png');
export const projectII3 = require('./image/projects/Project-II-3.png');
export const projectIII1 = require('./image/projects/Project-III-1.png');
export const projectIII2 = require('./image/projects/Project-III-2.png');
export const projectIII3 = require('./image/projects/Project-III-3.png');
