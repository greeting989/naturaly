import React, { Component } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Section from "./components/Section";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./Pages/Product";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import SignUp from "./components/account/SignUp";
import Account from "./Pages/Account";
import Cart from "./components/Cart";
import ProductDetail from "./Pages/ProductDetail";
import { UserAuthContextProvider } from "./context/Auth";
import { ProductContextProvider } from "./context/ProductContext";
import CheckOut from "./Pages/CheckOutPage";
function App() {
  return (
    <>
      <UserAuthContextProvider>
        <ProductContextProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
                <Home />
            }
          />
          <Route path="/products/" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={
         <ProtectedRoutes>
            <CheckOut/>
         </ProtectedRoutes>
          } />

        </Routes>
        </ProductContextProvider>
      </UserAuthContextProvider>
      <Footer />
    </>
  );
}

export default App;
