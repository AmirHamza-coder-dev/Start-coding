import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter, Routes, Route } from 'react-router';
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
import Layout from './Components/Layout/Index';
import Home from './Pages/Home';
import Navbar from './Components/Layout/Navbar';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/ProductDetails';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
<<<<<<< HEAD

=======
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
import ApiTest from './Pages/ApiTest';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
=======
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          {/* <Route path="/registration" element={<Registration />} /> */}
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
        </Route>

        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/apiTest" element={<ApiTest />} />
=======
        <Route path= "/apiTest" element = {<ApiTest/>} />
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
      </Routes>
    </BrowserRouter>
  );
};

export default App;
