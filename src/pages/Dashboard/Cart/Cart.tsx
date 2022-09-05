import { useState } from "react";
import { Link } from "react-router-dom";

import "./cart.css";

import Header from "../../../components/Dashboard/Header";
import ProductInCart from "../../../components/Dashboard/ProductInCart";
import DeleteProducts from "../../../components/Modal/Warnings/DeleteProducts";
import Icons from "../../../components/Icons";

type NavBarResponsive = "100%" | "0";

export default function Cart() {
    const [open, setOpenModal] = useState<boolean>(false);

    const openModalWarningDelete = () => {
        setOpenModal(true);
    };

    const closeModalWarningDelete = () => {
        setOpenModal(false);
    };

    const [widthofNavBarResponsive, setWidthofNavBarResponsive] =
        useState<NavBarResponsive>("0");

    return (
        <>
            <div
                className="w-full pl-40 md:px-6 text-white py-9 pr-16 flex items-center"
                style={{ backgroundColor: "#272727" }}
            >
                <div
                    className="hidden md:block md:basis-1/12 sm:basis-5/12"
                    style={{ cursor: "pointer" }}
                    onClick={() => setWidthofNavBarResponsive("100%")}
                >
                    <Icons.Menu stroke="#F3A446" />
                </div>
                <div className="basis-9/12 2xl:basis-8/12 xl:basis-7/12 lg:basis-5/12 md:basis-7/12 sm:hidden">
                    <div className="text-2xl xl:text-xl lg:text-lg font-semibold pb-1">
                        My Cart
                    </div>
                    <div className="text-sm xl:text-xs lg:text-[10px]">
                        Tuesday, 27 Jun 2022
                    </div>
                </div>
                <div className="basis-3/12 2xl:basis-4/12 xl:basis-5/12 lg:basis-7/12 md:basis-4/12 sm:basis-7/12">
                    <Header />
                </div>
            </div>
            <div className="ml-40 md:ml-0 text-white pr-16 md:px-6 py-6 xl:text-sm md:text-xs">
                <div className="bg-dark-bg w-full rounded-lg sm:hidden">
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
                    <div className="text-lg xl:text-base py-5 pl-20 flex justify-between pr-5 items-center">
                        <div className="basis-5/12">Products (3 items)</div>
                        <div className="flex justify-between basis-6/12 text-center">
                            <div className="basis-3/12">Size</div>
                            <div className="basis-3/12">Quantity</div>
                            <div className="basis-3/12">Price</div>
                            <div className="basis-3/12">Subtotal</div>
                        </div>
                        <div className="basis-1/12 justify-end flex">
                            <Icons.Trash stroke="#323232" />
                        </div>
                    </div>
                </div>
                <header className="hidden sm:block text-base font-semibold">My Cart</header>
                <div className="flex flex-col space-y-1 pt-5">
                    <ProductInCart
                        rounded="rounded-t-lg"
                        openModalWarningDelete={() => openModalWarningDelete()}
                    />
                    <ProductInCart
                        rounded="rounded-t-lg"
                        openModalWarningDelete={() => openModalWarningDelete()}
                    />
                    <ProductInCart
                        rounded="rounded-t-lg"
                        openModalWarningDelete={() => openModalWarningDelete()}
                    />
                </div>
                <DeleteProducts
                    open={open}
                    closeModalWarningDelete={() => closeModalWarningDelete()}
                />
                <div className="flex flex-row justify-end items-center pt-9">
                    <div className="text-lg xl:text-base">Total: 0 VND</div>
                    <Link
                        to="checkout"
                        className="border border-primary bg-primary px-8 py-1.5 ml-9 rounded-md w-fit"
                    >
                        Check out
                    </Link>
                </div>
            </div>
            <div
                id="mySidenav"
                className="sidenav hover:text-primary"
                style={{ width: widthofNavBarResponsive }}
            >
                <a
                    href="javascript:void(0)"
                    className="closebtn"
                    onClick={() => setWidthofNavBarResponsive("0")}
                >
                    &times;
                </a>
                <Link
                    style={{ color: "#F3A446" }}
                    to="/"
                    className="text-lg font-semibold font-brand mb-14"
                >
                    BAKERY
                </Link>
                <Link to="/dashboard/product">Product</Link>
                <Link to="/dashboard/cart">Cart</Link>
                <Link to="/dashboard/setting/account-info">Setting</Link>
                <Link style={{ color: "rgb(185 28 28)" }} to="/">
                    Logout
                </Link>
            </div>
        </>
    );
}
