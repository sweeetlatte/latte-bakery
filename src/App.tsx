import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";

import Dashboard from "./pages/Dashboard/Dashboard";
import Product from "./pages/Dashboard/Products/Products";
import Detail from "./pages/Dashboard/Products/Detail";
import Cart from "./pages/Dashboard/Cart/Cart";
import Checkout from "./pages/Dashboard/Cart/Checkout";
import Settings from "./pages/Dashboard/Settings/Settings";
import AccountInfo from "./pages/Dashboard/Settings/AccountInfo";
import AddressBook from "./pages/Dashboard/Settings/AddressBook";
import ChangePassword from "./pages/Dashboard/Settings/ChangePassword";

// config tailwindcss
import "./main.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/detail" element={<BlogDetail />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="product" element={<Product />} />
                    <Route path="detail" element={<Detail />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="cart/checkout" element={<Checkout />} />
                    <Route path="setting" element={<Settings />} />
                    <Route path="setting/accountinfo" element={<AccountInfo />} />
                    <Route path="setting/addressbook" element={<AddressBook />} />
                    <Route path="setting/changepassword" element={<ChangePassword />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
