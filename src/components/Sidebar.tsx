import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="h-full fixed w-[104px] z-10 top-0 left-0 bg-dark-bg rounded-r-3xl text-primary pt-20 flex flex-col items-center">
            <Link to="/" className="text-lg font-semibold font-brand">
                BAKERY
            </Link>
            <div>abc</div>
            <div>abc</div>
            <div>abc</div>
            <div>abc</div>
        </div>
    );
}
