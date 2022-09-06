import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./settings.css";

import { IUser } from "../../../types";

import camera from "../../../assets/icons/camera.svg";
import ava from "../../../assets/images/about-1.png";
import Header from "../../../components/Dashboard/Header";
import { fetchUserData } from "../../../app/api";

export default function Settings() {
    const [index, setIndex] = useState<number>(0);
    let location = useLocation();

    const [userData, setUserData] = useState<IUser>();

    useEffect(
        function () {
            if (location.pathname.includes("/dashboard/setting/account-info"))
                setIndex(0);
            else if (
                location.pathname.includes("/dashboard/setting/address-book")
            )
                setIndex(1);
            else if (
                location.pathname.includes("/dashboard/setting/change-password")
            )
                setIndex(2);
        },
        [location]
    );

    useEffect(() => {
        (async () => {
            const responseData = await fetchUserData();

            if (responseData) {
                setUserData(responseData[0]);
            }
        })();
    }, []);

    return (
        <>
            <Header header="Settings" />
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
                        {userData?.name}
                    </div>
                    <div className="space-y-7 flex flex-col">
                        <Link
                            to="account-info"
                            className={
                                index === 0
                                    ? "pl-11 settings-active-tab"
                                    : "pl-11"
                            }
                        >
                            Account information
                        </Link>
                        <Link
                            to="address-book"
                            className={
                                index === 1
                                    ? "pl-11 settings-active-tab"
                                    : "pl-11"
                            }
                        >
                            Address book
                        </Link>
                        <Link
                            to="change-password"
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
