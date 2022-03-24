import React from "react";
import { Link } from "react-router-dom";

import Icons from "../../../components/Icons";
import arrowLeft from "../../../assets/icons/arrow-left.svg";

import ava from "../../../assets/images/blog/detail/detail-1.png";
import ProductInCheckout from "../../../components/Dashboard/ProductInCheckout";

export default function Checkout() {
    return (
        <>
            <div
                className="w-full pl-40 text-white py-9 pr-16 flex items-center"
                style={{ backgroundColor: "#272727" }}
            >
                <div className="basis-9/12">
                    <div className="text-2xl font-semibold pb-1">Checkout</div>
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
                <div className="flex space-x-[27.5px] pb-8">
                    <img src={arrowLeft} alt="arrow left" />
                    <div className="flex">
                        <Link to="/dashboard/cart">Cart</Link>
                        &nbsp;/&nbsp;
                        <div className="text-primary">Shipping information</div>
                    </div>
                </div>
                <div className="bg-dark-bg py-3.5 rounded-lg mb-8">
                    <div className="w-max mx-auto">progress bar</div>
                </div>
                <div className="pb-8">
                    <div className="text-lg font-bold">
                        Shipping information
                    </div>
                    <div className="text-sm text-caption pt-0.5">
                        Orders #354262
                    </div>
                </div>
                <div className="flex justify-between space-x-16">
                    <div className="basis-7/12 space-y-5">
                        <div className="bg-dark-bg rounded-lg px-12 py-6 max-h-80 overflow-y-scroll">
                            <div className="flex justify-between items-center pb-2">
                                <div className="text-sm">
                                    240.000 VND (5 products)
                                </div>
                                <div className="bg-primary w-[32px] h-[32px] flex justify-center items-center">
                                    -
                                </div>
                            </div>
                            <div>
                                <ProductInCheckout />
                                <ProductInCheckout />
                                <ProductInCheckout />
                                <ProductInCheckout />
                                <ProductInCheckout />
                            </div>
                        </div>
                        <div className="bg-dark-bg rounded-lg px-12 py-6">
                            <div className="text-primary">Order summary</div>
                            <div
                                className="text-sm py-4 mb-4 space-y-2"
                                style={{ borderBottom: "1px solid #656870" }}
                            >
                                <div className="flex justify-between">
                                    <div>Subtotal</div>
                                    <div>240.000 VND</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Shipping fee</div>
                                    <div>0 VND</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Discount</div>
                                    <div>-30.000 VND</div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-primary">item</div>
                                <div>210.000 VND</div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-5/12 space-y-5">
                        <div className="bg-dark-bg rounded-lg px-12 py-6">
                            <div className="flex justify-between">
                                <div>item</div>
                                <div>+-</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <div>icon</div>
                                    <div>text</div>
                                </div>
                                <div>+-</div>
                            </div>
                        </div>
                        <div className="bg-dark-bg rounded-lg px-12 py-6">
                            <div>title</div>
                            <div className="flex">
                                <div>title</div>
                                <div>title</div>
                                <div>title</div>
                            </div>
                        </div>
                        <div className="bg-dark-bg rounded-lg px-12 py-6">
                            <div>title</div>
                            <div className="flex">
                                <div>title</div>
                                <div>title</div>
                            </div>
                        </div>
                        <div className="bg-dark-bg rounded-lg px-12 py-6">
                            button
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
