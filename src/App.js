import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
// import pages
import Home from "./pages/home";
import Login from './pages/login';
import Signup from './pages/signup';
import Shop from './pages/shop';
import Category1 from './pages/category1';
import ShopDetail from './pages/shopDetail';
import Cart from './pages/cart';
import VehicleDetail from './pages/vehicleDetail'
import ModelS from './pages/vehicleInfo/modelS';
import Model3 from './pages/vehicleInfo/model3';
import ModelX from './pages/vehicleInfo/modelX';
import ModelY from './pages/vehicleInfo/modelY';
import Compare from './pages/compare';
// import react-query
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/vehicle/:vehicleName" element={<VehicleDetail/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element={<Signup/>}/>
        <Route path = "/shop" element={<Shop/>}/>
        <Route path = "/shop/category/charging" element={<Category1/>}/>
        <Route path = "/shop/item/itemName" element={<ShopDetail/>}/>
        <Route path = "/vehicle/info/model%20S" element={<ModelS/>}/>
        <Route path = "/vehicle/info/model%203" element={<Model3/>}/>
        <Route path = "/vehicle/info/model%20X" element={<ModelX/>}/>
        <Route path = "/vehicle/info/model%20Y" element={<ModelY/>}/>
        <Route path = "/shop/cart/:id" element={<Cart/>}/>
        <Route path = "/vehicle/compare" element={<Compare/>}/>

      </Routes>
    </QueryClientProvider>
  );
}

export default App;