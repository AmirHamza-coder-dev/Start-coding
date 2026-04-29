import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import the Provider and your API service
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiService } from './Services/Api.js'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap your App with the ApiProvider */}
    <ApiProvider api={apiService}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);