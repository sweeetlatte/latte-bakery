import React from "react";
import { Link } from "react-router-dom";

import cake from "../../assets/images/blog/blog-2.png";
import cartIcon from "../../assets/icons/cart.svg";

export default function ProductCardHorizontal() {
    return (
        <Link
            to="/dashboard/detail"
            className="bg-dark-bg py-4 px-4 rounded-lg flex space-x-4"
        >
            <img
                className="h-[100px] w-[100px] object-cover"
                src={cake}
                alt="cake"
            />
            <div className="text-sm h-full">
                <div className="font-medium text-primary">
                    Choco Protein Brownie
                </div>
                <div className="pt-1">60.000 VND</div>
                <button className="border border-primary bg-primary pl-2 pr-2.5 py-1 mt-5 h-max rounded-md flex items-center">
                    <img className="mr-1" src={cartIcon} alt="cart icon" />
                    Add
                </button>
            </div>
        </Link>
    );
}
