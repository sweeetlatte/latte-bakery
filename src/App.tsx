import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppContextProvider from "./contexts/AppContext";

import "./App.css";

import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import LandingPage from "./pages/LandingPage/LandingPage";
import BlogPage from "./pages/LandingPage/BlogPage";
import BlogDetail from "./pages/LandingPage/BlogDetail";

import Dashboard from "./pages/Dashboard/Dashboard";
import Product from "./pages/Dashboard/Products/Products";
import Search from "./pages/Dashboard/Products/Search";
import Detail from "./pages/Dashboard/Products/Detail";
import Cart from "./pages/Dashboard/Cart/Cart";
import Checkout from "./pages/Dashboard/Cart/Checkout";
import Order from "./pages/Dashboard/Cart/Order";
import Settings from "./pages/Dashboard/Settings/Settings";
import AccountInfo from "./pages/Dashboard/Settings/AccountInfo";
import AddressBook from "./pages/Dashboard/Settings/AddressBook/AddressBook";
import AddAddress from "./pages/Dashboard/Settings/AddressBook/AddAddress";
import EditAddress from "./pages/Dashboard/Settings/AddressBook/EditAddress";
import ChangePassword from "./pages/Dashboard/Settings/ChangePassword";

import NotFound from "./pages/NotFound";

// config tailwindcss
import "./main.css";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/detail" element={<BlogDetail />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="product" element={<Product />} />
            <Route path="product/search" element={<Search />} />
            <Route path="detail" element={<Detail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cart/checkout" element={<Checkout />} />
            <Route path="cart/order" element={<Order />} />
            <Route path="setting" element={<Settings />}>
              <Route path="account-info" element={<AccountInfo />} />
              <Route path="address-book">
                <Route path="add-address" element={<AddAddress />} />
                <Route path="edit-address" element={<EditAddress />} />
                <Route index element={<AddressBook />} />
              </Route>
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
