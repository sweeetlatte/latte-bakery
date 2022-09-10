import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import "./../dashboard.css";
import "./cart.css";

import Header from "../../../components/Dashboard/Header";

export default function Cart() {
    let location = useLocation();
    const [active, setActive] = useState<string>("");
    const [border, setBorder] = useState<string>("");
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
                <div className="bg-dark-bg py-6 rounded-lg mb-8 md:mb-6 space-y-3">
                    <div className="w-max mx-auto flex items-center text-lg font-bold">
                        <div className="bg-primary rounded-full w-9 h-9 flex justify-center items-center">
                            1
                        </div>
                        <div className="w-36 h-1 border-y border-primary">
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
                        <div className="w-36 h-1 border-y border-primary">
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
                    <div className="w-max mx-auto grid grid-cols-3 place-items-center place-self-center text-lg font-semibold">
                        <div
                            className={active === "Cart" ? "text-primary" : ""}
                        >
                            Cart
                        </div>
                        <div
                            className={
                                active === "Shipping Information"
                                    ? "text-primary"
                                    : ""
                            }
                        >
                            Shipping Information
                        </div>
                        <div
                            className={
                                active === "Order Status" ? "text-primary" : ""
                            }
                        >
                            Order Status
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    );
}
