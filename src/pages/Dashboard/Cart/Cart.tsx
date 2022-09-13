import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./../dashboard.css";
import "./cart.css";

import { useAppSelector } from "../../../redux/store";

import Header from "../../../components/Dashboard/Header";

import emptyCart from "../../../assets/images/empty-cart.png";

export default function Cart() {
    let location = useLocation();
    const [active, setActive] = useState<string>("");
    const [border, setBorder] = useState<string>("");
    const cartItems = useAppSelector((state) => state.cart.items);

    useEffect(() => {
        if (location.pathname.includes("product-list")) {
            setActive("Cart");
        } else if (location.pathname.includes("shipping-information")) {
            setActive("Shipping Information");
            setBorder("bg-primary");
        } else if (location.pathname.includes("order")) {
            setActive("Order Status");
            setBorder("bg-primary");
        }
    }, [location.pathname]);

    return (
        <>
            <Header header={"My Cart"} />
            <div className="dashboard-container">
                {cartItems.length > 0 ? (
                    <>
                        <div className="bg-dark-bg py-6 rounded-lg mb-8 md:mb-6 space-y-3 text-lg lg:text-base sm:text-sm">
                            <div className="w-max mx-auto flex items-center font-bold">
                                <div className="bg-primary rounded-full w-9 h-9 flex justify-center items-center">
                                    1
                                </div>
                                <div className="w-36 lg:w-[7.6rem] sm:w-12 h-1 border-y border-primary">
                                    <div
                                        className={
                                            active === "Shipping Information" ||
                                            active === "Order Status"
                                                ? "w-full h-full bg-primary width-to-right"
                                                : ""
                                        }
                                    ></div>
                                </div>
                                <div
                                    className={
                                        active === "Shipping Information" ||
                                        active === "Order Status"
                                            ? `${border} border border-primary rounded-full w-9 h-9 flex justify-center items-center`
                                            : "border border-primary rounded-full w-9 h-9 flex justify-center items-center"
                                    }
                                >
                                    2
                                </div>
                                <div className="w-36 lg:w-[7.6rem] sm:w-12 h-1 border-y border-primary">
                                    <div
                                        className={
                                            active === "Order Status"
                                                ? "w-full h-full bg-primary width-to-right"
                                                : ""
                                        }
                                    ></div>
                                </div>
                                <div
                                    className={
                                        active === "Order Status"
                                            ? `${border} border border-primary rounded-full w-9 h-9 flex justify-center items-center`
                                            : "border border-primary rounded-full w-9 h-9 flex justify-center items-center"
                                    }
                                >
                                    3
                                </div>
                            </div>
                            <div className="w-max mx-auto grid sm:flex grid-cols-3 place-items-center place-self-center font-semibold">
                                <div
                                    className={
                                        active === "Cart"
                                            ? "text-primary sm:basis-1/3 sm:text-center"
                                            : "sm:basis-1/3 sm:text-center"
                                    }
                                >
                                    Cart
                                </div>
                                <div
                                    className={
                                        active === "Shipping Information"
                                            ? "text-primary sm:basis-1/3 sm:text-center"
                                            : "sm:basis-1/3 sm:text-center"
                                    }
                                >
                                    Shipping Information
                                </div>
                                <div
                                    className={
                                        active === "Order Status"
                                            ? "text-primary sm:basis-1/3 sm:text-center"
                                            : "sm:basis-1/3 sm:text-center"
                                    }
                                >
                                    Order Status
                                </div>
                            </div>
                        </div>
                        <Outlet />
                    </>
                ) : (
                    <div className="text-lg lg:text-base sm:text-sm text-center flex flex-col items-center">
                        <div className="pt-[15%] pb-12 w-[50%] h-[50%] flex justify-center">
                            <img src={emptyCart} alt="empty cart" />
                        </div>
                        <p className="text-primary text-3xl xl:text-2xl lg:text-xl font-semibold pb-3">
                            Your Cart is Currently Empty!
                        </p>
                        <p>Explore and find your favorite sweets</p>
                        <Link to="/dashboard" className="filled-button mt-9">
                            SHOPPING NOW
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
