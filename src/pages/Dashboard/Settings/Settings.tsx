import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./settings.css";

import Icons from "../../../components/Icons";
import camera from "../../../assets/icons/camera.svg";
import ava from "../../../assets/images/blog/detail/detail-1.png";

export default function Settings() {
    const [index, setIndex] = useState<number>(0);
    let location = useLocation();

    useEffect(
        function () {
            console.log(location.pathname);
            if (location.pathname === "/dashboard/setting/accountinfo")
                setIndex(0);
            else if (location.pathname === "/dashboard/setting/addressbook")
                setIndex(1);
            else if (location.pathname === "/dashboard/setting/changepassword")
                setIndex(2);
            console.log(index);
        },
        [location]
    );

    return (
        <>
            <div
                className="w-full pl-40 text-white py-9 pr-16 flex items-center"
                style={{ backgroundColor: "#272727" }}
            >
                <div className="basis-9/12">
                    <div className="text-2xl font-semibold pb-1">Settings</div>
                    <div className="text-sm">Tuesday, 27 Jun 2022</div>
                </div>
                <div className="flex items-center basis-3/12">
                    <div className="border border-primary rounded py-1 pl-3.5 pr-1.5 mr-8 flex items-center space-x-1">
                        <p>EN</p>
                        <Icons.ChevronDown stroke="white" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="accountinfo">
                            <img
                                className="w-14 h-14 object-cover rounded-full"
                                src={ava}
                                alt="ava"
                            />
                        </Link>
                        <Link to="accountinfo">
                            <p>Latte</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="ml-40 text-white pr-16 py-6 flex justify-between space-x-12">
                <div className="basis-3/12 bg-dark-bg rounded-lg py-7">
                    <div className="w-[182px] h-[182px] mx-auto border-primary rounded-full border-4 relative">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src={ava}
                            alt="ava"
                        />
                        <button className="absolute right-0 bottom-0 bg-primary w-[36px] h-[36px] rounded-full flex justify-center items-center">
                            <img src={camera} alt="camera" />
                        </button>
                    </div>
                    <div className="pt-4 text-center font-bold text-lg pb-8">
                        Sweet Latte
                    </div>
                    <div className="space-y-7 flex flex-col">
                        <Link
                            to="accountinfo"
                            className={
                                index === 0
                                    ? "pl-11 settings-active-tab"
                                    : "pl-11"
                            }
                        >
                            Account information
                        </Link>
                        <Link
                            to="addressbook"
                            className={
                                index === 1
                                    ? "pl-11 settings-active-tab"
                                    : "pl-11"
                            }
                        >
                            Address book
                        </Link>
                        <Link
                            to="changepassword"
                            className={
                                index === 2
                                    ? "settings-active-tab pl-11"
                                    : "pl-11"
                            }
                        >
                            Change password
                        </Link>
                    </div>
                </div>
                <div className="basis-9/12 w-52 bg-dark-bg rounded-lg px-11 py-7">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
