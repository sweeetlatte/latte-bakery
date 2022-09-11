import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

import AppContextProvider from "./contexts/AppContext";
import store from "./redux/store";

import "./App.css";
// config tailwindcss
import "./main.css";

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
import ProductList from "./pages/Dashboard/Cart/ProductList";
import ShippingInformation from "./pages/Dashboard/Cart/ShippingInformation";
import Order from "./pages/Dashboard/Cart/Order";
import Settings from "./pages/Dashboard/Settings/Settings";
import AccountInfo from "./pages/Dashboard/Settings/AccountInfo";
import AddressBook from "./pages/Dashboard/Settings/AddressBook/AddressBook";
import AddAddress from "./pages/Dashboard/Settings/AddressBook/AddAddress";
import EditAddress from "./pages/Dashboard/Settings/AddressBook/EditAddress";
import ChangePassword from "./pages/Dashboard/Settings/ChangePassword";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
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
              <Route path="cart" element={<Cart />} >
                <Route path="product-list" element={<ProductList />} />
                <Route path="shipping-information" element={<ShippingInformation />} />
                <Route path="order" element={<Order />} />
                <Route index element={<Navigate to="product-list" />}/>
              </Route>
              <Route path="setting" element={<Settings />}>
                <Route path="account-info" element={<AccountInfo />} />
                <Route path="address-book">
                  <Route path="add-address" element={<AddAddress />} />
                  <Route path="edit-address" element={<EditAddress />} />
                  <Route index element={<AddressBook />} />
                </Route>
                <Route path="change-password" element={<ChangePassword />} />
                <Route index element={<Navigate to="account-info" />}/>
              </Route>
              <Route index element={<Navigate to="product" />}/>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </Provider>
  );
}

export default App;
