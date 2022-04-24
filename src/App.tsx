import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import LandingPage from "./pages/LandingPage/LandingPage";
import BlogPage from "./pages/LandingPage/BlogPage";
import BlogDetail from "./pages/LandingPage/BlogDetail";

import Dashboard from "./pages/Dashboard/Dashboard";
import Product from "./pages/Dashboard/Products/Products";
import Detail from "./pages/Dashboard/Products/Detail";
import Cart from "./pages/Dashboard/Cart/Cart";
import Checkout from "./pages/Dashboard/Cart/Checkout";
import Settings from "./pages/Dashboard/Settings/Settings";
import AccountInfo from "./pages/Dashboard/Settings/AccountInfo";
import AddressBook from "./pages/Dashboard/Settings/AddressBook/AddressBook";
import AddAdress from "./pages/Dashboard/Settings/AddressBook/AddAdress";
import EditAddress from "./pages/Dashboard/Settings/AddressBook/EditAddress";
import ChangePassword from "./pages/Dashboard/Settings/ChangePassword";

import NotFound from "./pages/NotFound";

// config tailwindcss
import "./main.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/detail" element={<BlogDetail />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="product" element={<Product />} />
                    <Route path="detail" element={<Detail />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="cart/checkout" element={<Checkout />} />
                    <Route path="setting" element={<Settings />}>
                        <Route path="account-info" element={<AccountInfo />} />
                        <Route path="address-book" element={<AddressBook />} />
                        <Route
                            path="address-book/add-address"
                            element={<AddAdress />}
                        />
                        <Route
                            path="address-book/edit-address"
                            element={<EditAddress />}
                        />
                        <Route
                            path="change-password"
                            element={<ChangePassword />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
