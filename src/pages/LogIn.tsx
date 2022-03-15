import React from "react";

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
                <div className="text-primary text-4xl font-semibold font-brand">
                    Bakery
                </div>
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
            </div>
        </div>
    );
}
