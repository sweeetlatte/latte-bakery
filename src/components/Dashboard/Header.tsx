import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IUser } from "../../types";
import { fetchUserData } from "../../app/api";

import ava from "../../assets/images/about-1.png";
import CustomSelectBox from "../CustomSelectBox";

export default function Header() {
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

    return (
        <div className="flex items-center space-x-8 justify-end">
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
                    <img
                        className="w-14 h-14 object-cover rounded-full"
                        src={ava}
                        alt="ava"
                    />
                </Link>
                <Link className="truncate md:hidden" to="/dashboard/setting/account-info">
                    <p>{userData?.name}</p>
                </Link>
            </div>
        </div>
    );
}
