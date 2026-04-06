import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './Components/Layout/Index';
import Home from './Pages/Home';
import Navbar from './Components/Layout/Navbar';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/ProductDetails';
const App = () => {
  return (

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/:id' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
