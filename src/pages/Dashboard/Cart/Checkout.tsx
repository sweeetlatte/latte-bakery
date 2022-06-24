import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CheckoutMethod } from "../../../types";

import ProductInCheckout from "../../../components/Dashboard/ProductInCheckout";
import Header from "../../../components/Dashboard/Header";

import Icons from "../../../components/Icons";
import voucher from "../../../assets/icons/voucher.svg";
import AddressCardInCheckout from "../../../components/Dashboard/AddressCardInCheckout";
import SelectedAddress from "../../../components/Dashboard/SelectedAddress";

export default function Checkout() {
    const [showingProducts, setShowingProducts] = useState(true);
    const [checkoutMethod, setCheckoutMethod] = useState<CheckoutMethod>(
        CheckoutMethod.Cash
    );

    const changeCheckoutMethod = (method: CheckoutMethod) => {
        setCheckoutMethod(method);
    };

    const [isHidden, setIsHidden] = useState<boolean | null>(null);

    return (
        <>
            <div
                className={
                    isHidden === false
                        ? "fixed top-0 right-0 h-screen w-1/3 bg-light z-50 in-right text-white p-6 flex flex-col justify-between"
                        : isHidden === true
                        ? "fixed top-0 right-0 h-screen w-1/3 bg-light z-50 out-left text-white p-6 flex flex-col justify-between"
                        : "hidden"
                }
                style={
                    {
                        "--opacity": 1,
                        "--duration": "300ms",
                    } as React.CSSProperties
                }
            >
                <div className="basis-11/12 overflow-hidden">
                    <div className="text-xl pb-5 flex items-center space-x-3">
                        <div className="cursor-pointer" onClick={() => setIsHidden(true)}>
                            <Icons.ArrowLeft />
                        </div>
                        <p>Select address</p>
                    </div>
                    <div className="h-[90%] space-y-3 overflow-scroll address-list">
                        <AddressCardInCheckout />
                    </div>
                </div>
                <div className="basis-1/12 flex items-end">
                    <button
                        className="bg-primary rounded-lg w-full py-3"
                        onClick={() => setIsHidden(true)}
                    >
                        APPLY
                    </button>
                </div>
            </div>
            <div
                className={isHidden === false ? "__mask-modal" : ""}
                onClick={() => {
                    setIsHidden(true);
                }}
            />
            <div
                className="w-full pl-40 text-white py-9 pr-16 flex items-center"
                style={{ backgroundColor: "#272727" }}
            >
                <div className="basis-9/12">
                    <div className="text-2xl font-semibold pb-1">Checkout</div>
                    <div className="text-sm">Tuesday, 27 Jun 2022</div>
                </div>
                <div className="basis-3/12">
                    <Header />
                </div>
            </div>
            <div className="ml-40 text-white pr-16 py-6">
                <div className="flex space-x-[27.5px] pb-8 items-center">
                    <Icons.ArrowLeft />
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
                                <div>240.000 VND (5 products)</div>
                                <div
                                    className="bg-primary w-[32px] h-[32px] flex justify-center items-center cursor-pointer"
                                    onClick={() =>
                                        setShowingProducts(!showingProducts)
                                    }
                                >
                                    {showingProducts ? "-" : "+"}
                                </div>
                            </div>
                            {showingProducts && <ProductInCheckout />}
                        </div>
                        <div className="bg-dark-bg rounded-lg px-12 py-6">
                            <div className="text-primary font-medium">
                                Order summary
                            </div>
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
                                <div className="text-primary">Total</div>
                                <div>210.000 VND</div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-5/12 space-y-5">
                        <div className="bg-dark-bg rounded-lg px-12 py-6">
                            <div className="flex justify-between text-primary pb-4">
                                <div>Shipping address</div>
                                <div
                                className="cursor-pointer"
                                    onClick={() => {
                                        setIsHidden(false);
                                    }}
                                >
                                    Change
                                </div>
                            </div>
                            <SelectedAddress />
                        </div>
                        <div className="bg-dark-bg rounded-lg px-12 py-6">
                            <div className="text-primary pb-4">Payment</div>
                            <div className="flex space-x-5">
                                <button
                                    onClick={() =>
                                        changeCheckoutMethod(
                                            CheckoutMethod.Cash
                                        )
                                    }
                                    className={`w-[100px] h-[64px] ${
                                        checkoutMethod === "Cash"
                                            ? "bg-primary"
                                            : "bg-light"
                                    } rounded-lg font-medium flex flex-col justify-center items-center space-y-1`}
                                >
                                    <Icons.Cash
                                        stroke={
                                            checkoutMethod === "Cash"
                                                ? "black"
                                                : "white"
                                        }
                                    />
                                    <div
                                        className={
                                            checkoutMethod === "Cash"
                                                ? "text-black"
                                                : "text-white"
                                        }
                                    >
                                        Cash
                                    </div>
                                </button>
                                <button
                                    onClick={() =>
                                        changeCheckoutMethod(
                                            CheckoutMethod.Card
                                        )
                                    }
                                    className={`w-[100px] h-[64px] ${
                                        checkoutMethod === "Card"
                                            ? "bg-primary"
                                            : "bg-light"
                                    } rounded-lg flex flex-col justify-center items-center space-y-2`}
                                >
                                    <Icons.Card
                                        stroke={
                                            checkoutMethod === "Card"
                                                ? "black"
                                                : "white"
                                        }
                                    />
                                    <div
                                        className={
                                            checkoutMethod === "Card"
                                                ? "text-black"
                                                : "text-white"
                                        }
                                    >
                                        Card
                                    </div>
                                </button>
                                <button
                                    onClick={() =>
                                        changeCheckoutMethod(
                                            CheckoutMethod.Momo
                                        )
                                    }
                                    className={`w-[100px] h-[64px] ${
                                        checkoutMethod === "Momo"
                                            ? "bg-primary"
                                            : "bg-light"
                                    } rounded-lg flex flex-col justify-center items-center space-y-2`}
                                >
                                    <Icons.Card
                                        stroke={
                                            checkoutMethod === "Momo"
                                                ? "black"
                                                : "white"
                                        }
                                    />
                                    <div
                                        className={
                                            checkoutMethod === "Momo"
                                                ? "text-black"
                                                : "text-white"
                                        }
                                    >
                                        Momo
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="bg-dark-bg rounded-lg px-12 py-6">
                            <div className="text-primary pb-4">Giftcard</div>
                            <div className="flex space-x-3">
                                <img src={voucher} alt="voucher" />
                                <div className="underline underline-offset-[3px] decoration-[0.5px] decoration-[#CBCBCB] text-[#CBCBCB]">
                                    Choose or add a voucher
                                </div>
                            </div>
                        </div>
                        <button className="bg-primary font-bold rounded-lg px-12 py-3 w-full">
                            ORDER
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
