import React from "react";

import Icons from "../../../components/Icons";
import ProductInCart from "../../../components/Dashboard/ProductInCart";

import "./cart.css";

import ava from "../../../assets/images/blog/detail/detail-1.png";
import trash from "../../../assets/icons/trash-2.svg";

export default function Cart() {
    return (
        <>
            <div
                className="w-full pl-40 text-white py-9 pr-16 flex items-center"
                style={{ backgroundColor: "#272727" }}
            >
                <div className="basis-9/12">
                    <div className="text-2xl font-semibold pb-1">My Cart</div>
                    <div className="text-sm">Tuesday, 27 Jun 2022</div>
                </div>
                <div className="flex items-center basis-3/12">
                    <div className="border border-primary rounded py-1 pl-3.5 pr-1.5 mr-8 flex items-center space-x-1">
                        <p>EN</p>
                        <Icons.ChevronDown stroke="white" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            className="w-14 h-14 object-cover rounded-full"
                            src={ava}
                            alt="ava"
                        />
                        <p>Latte</p>
                    </div>
                </div>
            </div>
            <div className="ml-40 text-white pr-16 py-6">
                <div className="bg-dark-bg w-full rounded-lg">
                    <label htmlFor="checkall" className="cart-custom-checkbox">
                        <input
                            className="cart-checkbox"
                            type="checkbox"
                            id="checkall"
                            name="checkall"
                            value="checkall"
                        />
                        <span className="checkmark"></span>
                    </label>
                    <div className="text-lg py-5 pl-20 flex justify-between pr-5 items-center">
                        <div className="basis-4/12">Products (3 items)</div>
                        <div className="flex justify-between basis-6/12 text-center">
                            <div className="basis-3/12">Size</div>
                            <div className="basis-3/12">Quantity</div>
                            <div className="basis-3/12">Price</div>
                            <div className="basis-3/12">Subtotal</div>
                        </div>
                        <div className="basis-1/12 justify-end flex">
                            <img src={trash} alt="trash" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-1 pt-5">
                    <ProductInCart rounded="rounded-t-lg" />
                    <ProductInCart />
                    <ProductInCart rounded="rounded-b-lg" />
                </div>
            </div>
        </>
    );
}
