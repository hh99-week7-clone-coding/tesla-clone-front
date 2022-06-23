import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
// import pages
import Home from "./pages/home";
import Login from './pages/login';
import Signup from './pages/signup';
import Shop from './pages/shop';
import Category1 from './pages/Category1';
import Category2 from './pages/category2';
import Category3 from './pages/category3';
import Category4 from './pages/category4';
import Category5 from './pages/category5';
import Category6 from './pages/category6';
import Category7 from './pages/category7';
import Category8 from './pages/category8';
import Category9 from './pages/category9';
import ShopDetail from './pages/shopDetail';
import Cart from './pages/cart';
import VehicleDetail from './pages/vehicleDetail'
import ModelS from './pages/vehicleInfo/modelS';
import Model3 from './pages/vehicleInfo/model3';
import ModelX from './pages/vehicleInfo/modelX';
import ModelY from './pages/vehicleInfo/modelY';
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
        <Route path = "/shop/category/model-s" element={<Category2/>}/>
        <Route path = "/shop/category/model-3" element={<Category3/>}/>
        <Route path = "/shop/category/model-x" element={<Category4/>}/>
        <Route path = "/shop/category/model-y" element={<Category5/>}/>
        <Route path = "/shop/category/men" element={<Category6/>}/>
        <Route path = "/shop/category/women" element={<Category7/>}/>
        <Route path = "/shop/category/kids" element={<Category8/>}/>
        <Route path = "/shop/category/lifestyle" element={<Category9/>}/>
        <Route path = "/shop/item/itemName" element={<ShopDetail/>}/>
        <Route path = "/vehicle/info/model%20S" element={<ModelS/>}/>
        <Route path = "/vehicle/info/model%203" element={<Model3/>}/>
        <Route path = "/vehicle/info/model%20X" element={<ModelX/>}/>
        <Route path = "/vehicle/info/model%20Y" element={<ModelY/>}/>
        <Route path = "/shop/cart/:id" element={<Cart/>}/>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;