import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Products from "./Products/Products";
import DetailProduct from "./Products/Detail";
import Cart from "./Cart/Cart";
import Checkout from "./Cart/Checkout";

export default function Dashboard() {
    return (
        <>
            <Sidebar />
            {/* <Products /> */}
            {/* <DetailProduct /> */}
            {/* <Cart /> */}
            <Checkout />
        </>
    );
}
