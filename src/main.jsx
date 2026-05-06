

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiService } from './Services/Api.js'; 
import { CartProvider } from './Context/CartContext.jsx'; // এই লাইনটি যোগ করো

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiService}>
      <CartProvider> 
        <App />
      </CartProvider>
    </ApiProvider>
  </React.StrictMode>
);