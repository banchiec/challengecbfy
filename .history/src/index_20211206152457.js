import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { products } from './data/data'
import discount from './helpers/discounts'

ReactDOM.render(
  <React.StrictMode>
    {
      console.log(products)
    }
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);