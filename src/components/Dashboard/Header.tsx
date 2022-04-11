import React from "react";
import { Link } from "react-router-dom";

import Icons from "../Icons";

import ava from "../../assets/images/blog/detail/detail-1.png";

export default function Header() {
    return (
        <div className="flex items-center">
            <div className="border border-primary rounded py-1 pl-3.5 pr-1.5 mr-8 flex items-center space-x-1">
                <p>EN</p>
                <Icons.ChevronDown stroke="white" />
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/dashboard/setting/accountinfo">
                    <img
                        className="w-14 h-14 object-cover rounded-full"
                        src={ava}
                        alt="ava"
                    />
                </Link>
                <Link to="/dashboard/setting/accountinfo">
                    <p>Latte</p>
                </Link>
            </div>
        </div>
    );
}
