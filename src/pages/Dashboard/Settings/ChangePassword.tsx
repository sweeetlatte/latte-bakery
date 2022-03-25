import React from "react";

export default function ChangePassword() {
    return (
        <>
            <div className="font-bold text-lg">Change password</div>
            <div className="flex pt-14">
                <form className="settings-form">
                    <label className="flex items-center mb-4" htmlFor="uname">
                        <span className="w-[176px]">Current password</span>
                        <input
                            className="w-96 bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                            type="password"
                            id="uname"
                            name="uname"
                        />
                    </label>
                    <label className="flex items-center mb-4" htmlFor="phone">
                        <span className="w-[176px]">New password</span>
                        <input
                            className="w-96 bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                            type="password"
                            id="phone"
                            name="phone"
                        />
                    </label>
                    <label className="flex items-center mb-4" htmlFor="email">
                        <span className="w-[176px]">Confirm password</span>
                        <input
                            className="w-96 bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                            type="password"
                            id="email"
                            name="email"
                        />
                    </label>
                </form>
                <p className="pt-3 pl-5 text-primary">Forgot password?</p>
            </div>
            <div className="flex space-x-7 justify-end">
                <button className="border w-max border-primary text-primary px-5 py-2.5 mt-14 rounded-md">
                    Cancel
                </button>
                <button className="border w-max border-primary bg-primary px-5 py-2.5 mt-14 rounded-md">
                    Update
                </button>
            </div>
        </>
    );
}
