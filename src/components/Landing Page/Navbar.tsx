import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="pl-24 pr-20 flex items-center py-5">
            <div className="flex basis-4/12 justify-between text-sm">
                <div>About us</div>
                <div>Products</div>
                <Link to="/blog">Blog</Link>
                <div>Contact</div>
            </div>
            <Link
                to="/"
                className="basis-4/12 text-primary text-3xl font-semibold font-brand"
            >
                BAKERY
            </Link>
            <div className="flex basis-4/12 space-x-6 justify-end text-sm">
                <Link
                    to="/login"
                    className="border border-primary text-primary px-5 py-2.5 rounded-md"
                >
                    Log in
                </Link>
                <Link
                    to="/register"
                    className="border border-primary bg-primary px-5 py-2.5 rounded-md"
                >
                    Register
                </Link>
            </div>
        </div>
    );
}
