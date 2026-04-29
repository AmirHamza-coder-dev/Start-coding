<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiService } from "./Services/Api.js";

createRoot(document.getElementById("root")).render(
  <ApiProvider api={apiService}>
  
      <App />
  
  </ApiProvider>
);

  
    <App />
  


=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    <App />
  
)
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
