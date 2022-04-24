import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./sidebar.css";

export default function Sidebar() {
    const [indexSidebar, setIndexSidebar] = useState<number>(0);
    let locationSidebar = useLocation();

    useEffect(
        function () {
            if (locationSidebar.pathname === "/dashboard/product")
                setIndexSidebar(0);
            else if (locationSidebar.pathname === "/dashboard/cart")
                setIndexSidebar(1);
            else if (locationSidebar.pathname.includes("/dashboard/setting"))
                setIndexSidebar(2);
        },
        [locationSidebar]
    );

    return (
        <div className="bg-light w-[104px]">
            <div className="h-full fixed z-10 top-0 left-0 bg-dark-bg rounded-r-3xl text-primary pt-20 flex flex-col items-center">
                <Link to="/" className="text-lg font-semibold font-brand">
                    BAKERY
                </Link>
                <div
                    className={
                        indexSidebar === 0
                            ? "bg-light ml-3.5 mt-[84px] w-[92px] h-[80px] flex pl-3 items-center rounded-l-lg relative sidebar-tab"
                            : ""
                    }
                >
                    <Link
                        to="product"
                        className={
                            indexSidebar === 0
                                ? "bg-primary w-[56px] h-[56px] flex items-center justify-center rounded-lg shadow-2xl shadow-yellowRgba"
                                : ""
                        }
                    >
                        <div
                            className={
                                indexSidebar === 0
                                    ? "sidebar-active sidebar-icon-home icon bg-white"
                                    : "sidebar-icon-home icon bg-primary mt-[84px] hover:bg-white"
                            }
                        ></div>
                    </Link>
                </div>
                <div
                    className={
                        indexSidebar === 1
                            ? "bg-light ml-3.5 mt-[84px] mb-[84px] w-[92px] h-[80px] flex pl-3 items-center rounded-l-lg relative sidebar-tab"
                            : ""
                    }
                >
                    <Link
                        to="cart"
                        className={
                            indexSidebar === 1
                                ? "bg-primary w-[56px] h-[56px] flex items-center justify-center rounded-lg shadow-2xl shadow-yellowRgba"
                                : ""
                        }
                    >
                        <div
                            className={
                                indexSidebar === 1
                                    ? "sidebar-active sidebar-icon-cart icon bg-white"
                                    : "sidebar-icon-cart icon bg-primary mb-[84px] mt-[84px] hover:bg-white"
                            }
                        ></div>
                    </Link>
                </div>
                <div
                    className={
                        indexSidebar === 2
                            ? "bg-light ml-3.5 mb-[84px] w-[92px] h-[80px] flex pl-3 items-center rounded-l-lg relative sidebar-tab"
                            : ""
                    }
                >
                    <Link
                        to="setting/account-info"
                        className={
                            indexSidebar === 2
                                ? "bg-primary w-[56px] h-[56px] flex items-center justify-center rounded-lg shadow-2xl shadow-yellowRgba"
                                : ""
                        }
                    >
                        <div
                            className={
                                indexSidebar === 2
                                    ? "sidebar-active sidebar-icon-setting icon bg-white"
                                    : "sidebar-icon-setting icon bg-primary mb-[84px] hover:bg-white"
                            }
                        ></div>
                    </Link>
                </div>
                <Link
                    to="/"
                    className="mb-[84px] sidebar-icon-logout icon bg-primary hover:bg-white cursor-pointer"
                ></Link>
            </div>
        </div>
    );
}
