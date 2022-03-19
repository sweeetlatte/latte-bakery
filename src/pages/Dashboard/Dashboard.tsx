import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Products from "./Products/Products";
import DetailProduct from "./Products/Detail";

export default function Dashboard() {
    return (
        <>
            <Sidebar />
            {/* <Products /> */}
            <DetailProduct />
        </>
    );
}
