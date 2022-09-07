import { Link } from "react-router-dom";

export default function AddAddress() {
    return (
        <>
            <div className="settings-title">Add new address</div>
            <form className="settings-form">
                <label className="settings-form__label" htmlFor="uname">
                    <span className="settings-form__span">Name</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="uname"
                        name="uname"
                        placeholder="Name"
                    />
                </label>
                <label className="settings-form__label" htmlFor="phone">
                    <span className="settings-form__span">Phone number</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                    />
                </label>
                <label className="settings-form__label" htmlFor="street">
                    <span className="settings-form__span">Street</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="street"
                        name="street"
                        placeholder="Street"
                    />
                </label>
                <label className="settings-form__label" htmlFor="wards">
                    <span className="settings-form__span">Wards</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="wards"
                        name="wards"
                        placeholder="Wards"
                    />
                </label>
                <label className="settings-form__label" htmlFor="district">
                    <span className="settings-form__span">District</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="district"
                        name="district"
                        placeholder="District"
                    />
                </label>
                <label className="settings-form__label" htmlFor="city">
                    <span className="settings-form__span">Province / City</span>
                    <input
                        className="settings-form__input"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
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
                            <input type="radio" name="radio" checked />
                            <span className="radio-checkmark"></span>
                        </label>
                        <label className="custom-radio-container">
                            Home
                            <input type="radio" name="radio" />
                            <span className="radio-checkmark"></span>
                        </label>
                    </div>
                </label>
                <div className="flex space-x-5 pt-6 sm:pt-2">
                    <Link
                        className="w-full"
                        to="/dashboard/setting/address-book"
                    >
                        <button className="settings-outlined-button">
                            Cancel
                        </button>
                    </Link>
                    <Link
                        className="w-full"
                        to="/dashboard/setting/address-book"
                    >
                        <button className="filled-button">Add</button>
                    </Link>
                </div>
            </form>
        </>
    );
}
