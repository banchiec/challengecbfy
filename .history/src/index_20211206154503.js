import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// here you should call a service
import { products } from './data/data'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);