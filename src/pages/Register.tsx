import React from "react";
import { Link } from "react-router-dom";

import login from "../assets/images/login.png";
import facebook from "../assets/images/Facebook.png";
import google from "../assets/images/Google.png";

export default function Register() {
    return (
        <div className="text-white">
            <img className="object-cover absolute" src={login} alt="login" />
            <div className="relative h-max px-48 py-20 rounded-l-3xl bg-light ml-[24.5rem]">
                <Link
                    to="/"
                    className="text-primary text-4xl font-semibold font-brand"
                >
                    Bakery
                </Link>
                <div className="pt-12 text-4xl font-semibold">Register</div>
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
                <form className="mb-16">
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
                    <label htmlFor="email">
                        <span className="block">Email</span>
                        <input
                            className="w-full bg-light py-3.5 px-3 mb-8 focus:border-primary focus:outline-none disabled:bg-light"
                            style={{ borderBottom: "1px solid white" }}
                            type="email"
                            id="email"
                            name="email"
                        />
                    </label>
                    <label htmlFor="password">
                        <span className="block">Password</span>
                        <input
                            className="w-full bg-light py-3.5 px-3 mb-20 focus:border-primary focus:outline-none disabled:bg-light"
                            style={{ borderBottom: "1px solid white" }}
                            type="password"
                            id="password"
                            name="password"
                        />
                    </label>
                    <button className="border w-full border-primary bg-primary px-5 py-2.5 rounded-md">
                        Register
                    </button>
                </form>
                <div className="">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
}
