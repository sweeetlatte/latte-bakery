import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="bg-light w-[104px]">
            <div className="h-full fixed  z-10 top-0 left-0 bg-dark-bg rounded-r-3xl text-primary pt-20 flex flex-col items-center">
                <Link to="/" className="text-lg font-semibold font-brand">
                    BAKERY
                </Link>
                <div className="bg-light ml-3.5 mt-[84px] mb-[84px] w-[92px] h-[80px] flex pl-3 items-center rounded-l-lg relative sidebar-tab">
                    <Link
                        to="product"
                        className="bg-primary w-[56px] h-[56px] flex items-center justify-center rounded-lg shadow-2xl shadow-yellowRgba"
                    >
                        <div className="sidebar-active sidebar-icon-home icon bg-white"></div>
                    </Link>
                </div>
                <Link to="cart">
                    <div className="mb-[84px] sidebar-icon sidebar-icon-cart icon"></div>
                </Link>
                <Link to="setting/accountinfo">
                    <div className="mb-[84px] sidebar-icon sidebar-icon-setting icon"></div>
                </Link>
                <div className="mb-[84px] sidebar-icon sidebar-icon-logout icon"></div>
            </div>
        </div>
    );
}
