import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Checkout from './helpers/checkout'
// here a service should be called to obtain the api data
import { products } from './data/data'

import discounts from './helpers/discounts';

const purchase = new Checkout(products, discounts)
App(purchase)