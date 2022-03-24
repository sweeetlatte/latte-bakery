import React from "react";

import Icons from "../../../components/Icons";
import camera from "../../../assets/icons/camera.svg";

import ava from "../../../assets/images/blog/detail/detail-1.png";

export default function Settings() {
    return (
        <>
            <div
                className="w-full pl-40 text-white py-9 pr-16 flex items-center"
                style={{ backgroundColor: "#272727" }}
            >
                <div className="basis-9/12">
                    <div className="text-2xl font-semibold pb-1">Settings</div>
                    <div className="text-sm">Tuesday, 27 Jun 2022</div>
                </div>
                <div className="flex items-center basis-3/12">
                    <div className="border border-primary rounded py-1 pl-3.5 pr-1.5 mr-8 flex items-center space-x-1">
                        <p>EN</p>
                        <Icons.ChevronDown stroke="white" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            className="w-14 h-14 object-cover rounded-full"
                            src={ava}
                            alt="ava"
                        />
                        <p>Latte</p>
                    </div>
                </div>
            </div>
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
                        Sweet Latte
                    </div>
                    <div className="space-y-7">
                        <div
                            className="pl-11 text-primary font-medium"
                            style={{ borderLeft: "3px solid #F3A446" }}
                        >
                            Account information
                        </div>
                        <div className="pl-11">Address</div>
                        <div className="pl-11">Change password</div>
                    </div>
                </div>
                <div className="basis-9/12 bg-dark-bg rounded-lg px-11 py-7">
                    <div className="font-bold text-lg">Account information</div>
                    <form>
                        <label className="flex" htmlFor="uname">
                            <span className="block">Username</span>
                            <input
                                className="w-full bg-light py-3.5 px-3 mb-14 focus:border-primary focus:outline-none"
                                style={{ borderBottom: "1px solid white" }}
                                type="text"
                                id="uname"
                                name="uname"
                            />
                        </label>
                        <button className="border w-full border-primary bg-primary px-5 py-2.5 rounded-md">
                            Edit account information
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
