import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"
import { CartProvider } from './components/CartContext.jsx'

CartProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
);
