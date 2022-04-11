import React from "react";
import { Link } from "react-router-dom";

import notfound from "../assets/images/not-found.svg";

export default function NotFound() {
    return (
        <div className="text-primary bg-dark-bg h-screen flex flex-col space-y-10 justify-center items-center font-bold">
            <img className="h-3/4" src={notfound} alt="404" />
            <Link to="/">
                <button className="border border-primary px-5 py-2 h-max rounded-lg flex items-center hover:bg-primary hover:text-white">
                    BACK TO HOME
                </button>
            </Link>
        </div>
    );
}
