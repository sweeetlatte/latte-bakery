import { useEffect, useState } from "react";
import { fetchUserData } from "../../../app/api";

import Icons from "../../../components/Icons";
import Loader from "../../../components/Loader";

import { IUser } from "../../../types";

export default function AccountInfo() {
    const [userData, setUserData] = useState<IUser>();
    const [editMode, setEditMode] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const responseData = await fetchUserData();

            if (responseData) {
                setUserData(responseData[0]);
            }
        })();
    }, []);

    return userData ? (
        <>
            <div className="font-bold text-lg lg:text-base">
                Account information
            </div>
            <form className="settings-form py-10 sm:py-6 space-y-4">
                <label className="flex items-center" htmlFor="uname">
                    <span className="w-[176px] sm:w-[100px]">Name</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="uname"
                        name="uname"
                        disabled={editMode}
                        value={userData.name}
                        onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                        }
                    />
                </label>
                <label className="flex items-center" htmlFor="phone">
                    <span className="w-[176px] sm:w-[100px]">Phone number</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="phone"
                        name="phone"
                        disabled={editMode}
                        value={userData.phone}
                        onChange={(e) =>
                            setUserData({ ...userData, phone: e.target.value })
                        }
                    />
                </label>
                <label className="flex items-center" htmlFor="email">
                    <span className="w-[176px] sm:w-[100px]">Email</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="email"
                        id="email"
                        name="email"
                        disabled
                        value={userData.email}
                    />
                </label>
                <label
                    className="flex items-center sm:items-start"
                    htmlFor="dob"
                >
                    <span className="w-[176px] sm:w-[100px] sm:pt-1">
                        Date of birth
                    </span>
                    <div className="w-full flex sm:flex-col justify-between space-x-8 lg:space-x-4 sm:space-x-0 sm:space-y-4">
                        <div className="basis-3/12 border w-full border-primary rounded-lg py-3.5 px-3.5">
                            <div className="flex justify-between items-center">
                                <div>{userData.dob.split("/")[0]}</div>
                                <Icons.BiggerChevronDown stroke="white" />
                            </div>
                        </div>
                        <div className="basis-5/12 border w-full border-primary rounded-lg py-3.5 px-3.5">
                            <div className="flex justify-between items-center">
                                <div>{userData.dob.split("/")[1]}</div>
                                <Icons.BiggerChevronDown stroke="white" />
                            </div>
                        </div>
                        <div className="basis-4/12 border w-full border-primary rounded-lg py-3.5 px-3.5">
                            <div className="flex justify-between items-center">
                                <div>{userData.dob.split("/")[2]}</div>
                                <Icons.BiggerChevronDown stroke="white" />
                            </div>
                        </div>
                    </div>
                </label>
            </form>
            {editMode ? (
                <button
                    className="border w-full border-primary bg-primary px-5 py-2.5 rounded-md"
                    onClick={() => {
                        setEditMode(false);
                    }}
                >
                    Edit account information
                </button>
            ) : (
                <div className="flex space-x-5">
                    <button
                        className="border w-full border-primary text-primary px-5 py-2.5 rounded-md"
                        onClick={() => {
                            setEditMode(true);
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="border w-full border-primary bg-primary px-5 py-2.5 rounded-md"
                        onClick={() => {
                            setEditMode(true);
                        }}
                    >
                        Save
                    </button>
                </div>
            )}
        </>
    ) : (
        <Loader />
    );
}
