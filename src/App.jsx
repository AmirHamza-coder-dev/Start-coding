import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Index';
import Home from './Pages/Home';
import Navbar from './Components/Layout/Navbar';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/ProductDetails';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import ApiTest from './Pages/ApiTest';


const App = () => {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
        </Route>

        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apiTest" element={<ApiTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
