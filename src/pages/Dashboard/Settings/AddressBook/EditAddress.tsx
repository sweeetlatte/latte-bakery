import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { fetchUserData } from "../../../../app/api";
import { IAddress, IUser } from "../../../../types";

interface ILocationState {
    // Address is required
    address: IAddress;
    from?: {
        pathname: string;
    };
}

export default function EditAddress() {
    const location = useLocation();
    const state = (location.state as ILocationState) || {
        from: { pathname: "/" },
    };
    const [locationData, setLocationData] = useState<IAddress>(state.address!);

    // console.log(locationData);

    return (
        <>
            <div className="font-bold text-lg">Edit address</div>
            <form className="settings-form pt-14">
                <label className="flex items-center mb-4" htmlFor="uname">
                    <span className="w-[176px]">Name</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="uname"
                        name="uname"
                        value={locationData?.name}
                        onChange={(e) =>
                            setLocationData({ ...locationData!, name: e.target.value })
                        }
                    />
                </label>
                <label className="flex items-center mb-4" htmlFor="phone">
                    <span className="w-[176px]">Phone number</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="phone"
                        name="phone"
                        value={locationData?.phone}
                        onChange={(e) =>
                            setLocationData({ ...locationData!, phone: e.target.value })
                        }
                    />
                </label>
                <label className="flex items-center mb-4" htmlFor="street">
                    <span className="w-[176px]">Street</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="street"
                        name="street"
                        value={state.address?.street}
                        onChange={(e) =>
                            setLocationData({
                                ...locationData,
                                street: e.target.value,
                            })
                        }
                    />
                </label>
                <label className="flex items-center mb-4" htmlFor="wards">
                    <span className="w-[176px]">Wards</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="wards"
                        name="wards"
                        value={state.address?.wards}
                    />
                </label>
                <label className="flex items-center mb-4" htmlFor="district">
                    <span className="w-[176px]">District</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="district"
                        name="district"
                        value={state.address?.district}
                    />
                </label>
                <label className="flex items-center mb-4" htmlFor="city">
                    <span className="w-[176px]">Province/City</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="city"
                        name="city"
                        value={state.address?.province}
                    />
                </label>
                <label className="flex items-center mb-8 mt-6" htmlFor="type">
                    <span className="w-[176px]">Address type</span>
                    <div className="setting-custom-radio flex w-full text-base space-x-9">
                        <label className="setting-container">
                            Company
                            <input
                                type="radio"
                                name="radio"
                                checked={
                                    state.address?.type === "Company"
                                        ? true
                                        : false
                                }
                            />
                            <span className="setting-checkmark"></span>
                        </label>
                        <label className="setting-container">
                            Home
                            <input
                                type="radio"
                                name="radio"
                                checked={
                                    state.address?.type === "Home"
                                        ? true
                                        : false
                                }
                            />
                            <span className="setting-checkmark"></span>
                        </label>
                    </div>
                </label>
            </form>
            <div className="flex space-x-5">
                <Link className="w-full" to="/dashboard/setting/addressbook">
                    <button className="border w-full border-primary text-primary px-5 py-2.5 mt-14 rounded-md">
                        Cancel
                    </button>
                </Link>
                <Link className="w-full" to="/dashboard/setting/addressbook">
                    <button className="border w-full border-primary bg-primary px-5 py-2.5 mt-14 rounded-md">
                        Save
                    </button>
                </Link>
            </div>
        </>
    );
}
