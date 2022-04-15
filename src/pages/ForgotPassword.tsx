import React from "react";
import { Link } from "react-router-dom";

import login from "../assets/images/login.png";

export default function ForgotPassword() {
    return (
        <div className="text-white bg-dark-bg">
            <img
                className="object-cover absolute h-screen"
                src={login}
                alt="login"
            />
            <div className="relative h-screen px-48 py-20 rounded-l-3xl bg-light ml-[24.5rem] flex flex-col justify-between">
                <div>
                    <Link
                        to="/"
                        className="text-primary text-4xl font-semibold font-brand"
                    >
                        Bakery
                    </Link>
                    <div className="py-14 flex items-baseline">
                        <p className="text-2xl font-semibold text-primary">
                            Forgot your password?&nbsp;
                        </p>
                        <p>Don't worry! We got your back!</p>
                    </div>
                </div>
                <form className="mb-40 flex flex-col items-center">
                    <label htmlFor="email" className="w-full">
                        <span className="block">Email</span>
                        <input
                            className="w-full bg-light py-3.5 px-3 focus:border-primary focus:outline-none"
                            style={{ borderBottom: "1px solid white" }}
                            type="email"
                            id="email"
                            name="email"
                        />
                    </label>
                    <div className="space-x-10">
                        <Link to="/login">
                            <button className="border border-primary text-primary px-5 py-2.5 rounded-md mt-10">
                                Back to log in
                            </button>
                        </Link>
                        <button className="border border-primary bg-primary px-5 py-2.5 rounded-md mt-10">
                            Send request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
