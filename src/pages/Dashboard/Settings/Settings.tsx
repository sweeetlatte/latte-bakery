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
            <div className="dashboard-container flex sm:flex-col justify-between space-x-12 md:space-x-6 sm:space-x-0 sm:space-y-5">
                <div className="basis-3/12 bg-dark-bg rounded-lg py-7">
                    <div>
                        <div className="w-[182px] lg:w-[132px] sm:w-16 h-[182px] lg:h-[132px] sm:h-16 mx-auto border-primary rounded-full border-4 sm:border-2 relative">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src={ava}
                                alt="ava"
                            />
                            <button className="absolute right-0 sm:-right-2 bottom-0 sm:-bottom-2 bg-primary w-[36px] sm:w-8 h-[36px] sm:h-8 rounded-full flex justify-center items-center">
                                <img src={camera} alt="camera" />
                            </button>
                        </div>
                        <div className="pt-4 text-center font-bold text-lg lg:text-base pb-8">
                            {userData?.name}
                        </div>
                    </div>
                    <div className="space-y-7 flex flex-col">
                        <Link
                            to="account-info"
                            className={
                                index === 0 ? "settings-active-tab" : "pl-5"
                            }
                        >
                            Account information
                        </Link>
                        <Link
                            to="address-book"
                            className={
                                index === 1 ? "settings-active-tab" : "pl-5"
                            }
                        >
                            Address book
                        </Link>
                        <Link
                            to="change-password"
                            className={
                                index === 2 ? "settings-active-tab" : "pl-5"
                            }
                        >
                            Change password
                        </Link>
                    </div>
                </div>
                <div className="basis-9/12 w-52 bg-dark-bg rounded-lg px-11 py-7 md:p-7 sm:p-5 sm:w-full">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
