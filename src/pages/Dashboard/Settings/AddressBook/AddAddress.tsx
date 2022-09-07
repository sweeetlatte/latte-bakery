import { Link } from "react-router-dom";

export default function AddAddress() {
    return (
        <>
            <div className="font-bold text-lg lg:text-base">
                Add new address
            </div>
            <form className="settings-form py-10 sm:py-6 space-y-4">
                <label className="flex items-center" htmlFor="uname">
                    <span className="w-[176px] sm:w-[100px]">Name</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="uname"
                        name="uname"
                        placeholder="Name"
                    />
                </label>
                <label className="flex items-center" htmlFor="phone">
                    <span className="w-[176px] sm:w-[100px]">Phone number</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                    />
                </label>
                <label className="flex items-center" htmlFor="street">
                    <span className="w-[176px] sm:w-[100px]">Street</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="street"
                        name="street"
                        placeholder="Street"
                    />
                </label>
                <label className="flex items-center" htmlFor="wards">
                    <span className="w-[176px] sm:w-[100px]">Wards</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="wards"
                        name="wards"
                        placeholder="Wards"
                    />
                </label>
                <label className="flex items-center" htmlFor="district">
                    <span className="w-[176px] sm:w-[100px]">District</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="text"
                        id="district"
                        name="district"
                        placeholder="District"
                    />
                </label>
                <label className="flex items-center" htmlFor="city">
                    <span className="w-[176px] sm:w-[100px]">
                        Province / City
                    </span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
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
                    <span className="w-[176px] sm:w-[100px]">Address type</span>
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
            </form>
            <div className="flex space-x-5">
                <Link className="w-full" to="/dashboard/setting/address-book">
                    <button className="border w-full border-primary text-primary px-5 py-2.5 rounded-md">
                        Cancel
                    </button>
                </Link>
                <Link className="w-full" to="/dashboard/setting/address-book">
                    <button className="border w-full border-primary bg-primary px-5 py-2.5 rounded-md">
                        Add
                    </button>
                </Link>
            </div>
        </>
    );
}
