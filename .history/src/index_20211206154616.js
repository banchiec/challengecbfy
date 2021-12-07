import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// here a service should be called to obtain the api data
import { products } from './data/data'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);