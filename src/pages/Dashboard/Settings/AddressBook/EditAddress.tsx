import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { IAddress } from "../../../../types";

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
            <div className="settings-title">Edit address</div>
            <form className="settings-form">
                <label className="settings-form__label" htmlFor="uname">
                    <span className="settings-form__span">Name</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="uname"
                        name="uname"
                        value={locationData?.name}
                        onChange={(e) =>
                            setLocationData({
                                ...locationData!,
                                name: e.target.value,
                            })
                        }
                    />
                </label>
                <label className="settings-form__label" htmlFor="phone">
                    <span className="settings-form__span">Phone number</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="phone"
                        name="phone"
                        value={locationData?.phone}
                        onChange={(e) =>
                            setLocationData({
                                ...locationData!,
                                phone: e.target.value,
                            })
                        }
                    />
                </label>
                <label className="settings-form__label" htmlFor="street">
                    <span className="settings-form__span">Street</span>
                    <input
                        className="settings-form__input"
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
                <label className="settings-form__label" htmlFor="wards">
                    <span className="settings-form__span">Wards</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="wards"
                        name="wards"
                        value={state.address?.wards}
                    />
                </label>
                <label className="settings-form__label" htmlFor="district">
                    <span className="settings-form__span">District</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="district"
                        name="district"
                        value={state.address?.district}
                    />
                </label>
                <label className="settings-form__label" htmlFor="city">
                    <span className="settings-form__span">Province / City</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="city"
                        name="city"
                        value={state.address?.province}
                    />
                </label>
                <label
                    className="flex items-center sm:items-start"
                    htmlFor="type"
                >
                    <span className="settings-form__span">Address type</span>
                    <div className="flex sm:flex-col w-full text-base space-x-9 sm:space-x-0 sm:space-y-2">
                        <label className="custom-radio-container">
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
                            <span className="radio-checkmark"></span>
                        </label>
                        <label className="custom-radio-container">
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
                            <span className="radio-checkmark"></span>
                        </label>
                    </div>
                </label>
                <div className="flex space-x-5 pt-6 sm:pt-2">
                    <Link
                        className="w-full"
                        to="/dashboard/setting/address-book"
                    >
                        <button className="outlined-button w-full">
                            Cancel
                        </button>
                    </Link>
                    <Link
                        className="w-full"
                        to="/dashboard/setting/address-book"
                    >
                        <button className="filled-button w-full">Save</button>
                    </Link>
                </div>
            </form>
        </>
    );
}
