import React from "react";
import { Link } from "react-router-dom";

import ProductCardRgba from "../Landing Page/ProductCardRgba";

export default function Products() {
    return (
        <>
            <div className="font-title text-[200px] text-white-rgba text-left pl-28 absolute top-14">
                Products
            </div>
            <div className="flex pl-36 pt-28 justify-between items-center">
                <div className="font-title text-7xl text-left">Products</div>
                <Link to="dashboard/product">
                    <button className="border border-primary bg-primary px-10 rounded-md w-fit h-[44px] ">
                        View all
                    </button>
                </Link>
            </div>
            <div className="pt-28 pl-40 flex justify-between">
                <ProductCardRgba />
                <ProductCardRgba />
                <ProductCardRgba />
                <ProductCardRgba />
            </div>
            <div className="pt-12 pl-40 flex justify-between">
                <ProductCardRgba />
                <ProductCardRgba />
                <ProductCardRgba />
                <ProductCardRgba />
            </div>
        </>
    );
}
