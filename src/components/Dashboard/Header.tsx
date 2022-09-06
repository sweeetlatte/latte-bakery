import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IUser } from "../../types";
import { fetchUserData } from "../../app/api";

import ava from "../../assets/images/about-1.png";
import CustomSelectBox from "../CustomSelectBox";
import Icons from "../Icons";

interface Props {
    header: string;
}

type NavBarResponsive = "100%" | "0";

export default function Header({ header }: Props) {
    const [userData, setUserData] = useState<IUser>();

    useEffect(() => {
        (async () => {
            const responseData = await fetchUserData();

            if (responseData) {
                setUserData(responseData[0]);
            }
        })();
    }, []);

    const language = [
        { value: "en", label: "EN" },
        { value: "vn", label: "VN" },
    ];

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
                        {header}
                    </div>
                    <div className="text-sm xl:text-xs lg:text-[10px]">
                        Tuesday, 27 Jun 2022
                    </div>
                </div>
                <div className="basis-3/12 2xl:basis-4/12 xl:basis-5/12 lg:basis-7/12 md:basis-4/12 sm:basis-7/12 flex items-center space-x-8 justify-end xl:text-sm sm:text-xs">
                    <div>
                        <CustomSelectBox
                            data={language}
                            placeholder={"EN"}
                            width={"100%"}
                            height={"42px"}
                            borderColor={"#F3A446"}
                            controlBackgroundColor={"#272727"}
                            listBorderColor={"#F3A446"}
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/dashboard/setting/account-info">
                            <div className="w-14 h-14">
                                <img
                                    className="w-full h-full object-cover rounded-full"
                                    src={ava}
                                    alt="ava"
                                />
                            </div>
                        </Link>
                        <Link
                            className="truncate md:hidden"
                            to="/dashboard/setting/account-info"
                        >
                            <p>{userData?.name}</p>
                        </Link>
                    </div>
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
