import React from "react";
import { Link } from "react-router-dom";

import login from "../assets/images/login.png";
import facebook from "../assets/images/Facebook.png";
import google from "../assets/images/Google.png";

export default function LogIn() {
    return (
        <div className="text-white">
            <img
                className="max-h-screen object-cover absolute"
                src={login}
                alt="login"
            />
            <div className="relative h-screen px-48 pt-20 rounded-l-3xl bg-light ml-[24.5rem]">
                <Link
                    to="/"
                    className="text-primary text-4xl font-semibold font-brand"
                >
                    Bakery
                </Link>
                <div className="pt-12 text-4xl font-semibold">Log in</div>
                <div className="pt-14 flex space-x-9">
                    <div className="flex basis-1/2 space-x-4 items-center border rounded-lg px-4 py-4">
                        <img src={google} alt="google" />
                        <div>Continue with Google</div>
                    </div>
                    <div className="flex basis-1/2 space-x-4 items-center border rounded-lg px-4 py-4">
                        <img src={facebook} alt="facebook" />
                        <div>Continue with Facebook</div>
                    </div>
                </div>
                <div className="pt-14 pb-14 text-center">- OR -</div>
                <form>
                    <label htmlFor="uname">
                        <span className="block">Username</span>
                        <input
                            className="w-full bg-light py-3.5 px-3 mb-14 focus:border-primary focus:outline-none"
                            style={{ borderBottom: "1px solid white" }}
                            type="text"
                            id="uname"
                            name="uname"
                        />
                    </label>
                    <label htmlFor="uname">
                        <span className="block">Password</span>
                        <input
                            className="w-full bg-light py-3.5 px-3 mb-8 focus:border-primary focus:outline-none disabled:bg-light"
                            style={{ borderBottom: "1px solid white" }}
                            type="password"
                            id="password"
                            name="password"
                        />
                    </label>
                    <label htmlFor="rememberpw" className="custom-checkbox text-primary">
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="rememberpw"
                            name="rememberpw"
                            value="Remember"
                        />
                        Remeber password
                        <span className="checkmark"></span>
                    </label>
                </form>
            </div>
        </div>
    );
}
