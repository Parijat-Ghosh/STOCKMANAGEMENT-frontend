import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './index.css'; // C:\Users\gpari\OneDrive\Desktop\WebDev\StockManagement\frontend\src\index.js


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import reportWebVitals from './reportWebVitals';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/auth/Signup';
import Signin from './landing_page/auth/Login';
import AboutPage from './landing_page/about/AboutPage'; // C:\Users\gpari\OneDrive\Desktop\WebDev\StockManagement\frontend\src\landing_page\about\AboutPage.jsx
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import PricingPage from './landing_page/pricing/PricingPage'; 
import Navbar from './landing_page/Navbar'; 
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import { AuthProvider } from './authContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/about" element={< AboutPage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage />}/> 
      <Route path="*" element={<NotFound/>}/> 
    </Routes>
    <Footer/>

          {/* Add ToastContainer here */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      
   </BrowserRouter>
   </AuthProvider>
);
reportWebVitals();
