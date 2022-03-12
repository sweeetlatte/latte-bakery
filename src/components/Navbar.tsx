import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="px-6 flex items-center py-5 ">
            <div className="flex basis-4/12 justify-between text-sm">
                <div>Products</div>
                <div>About us</div>
                <Link to="/blog">Blog</Link>
                <div>Contact</div>
            </div>
            <Link to="/" className="basis-4/12 text-primary text-3xl font-semibold font-brand">
                BAKERY
            </Link>
            <div className="flex basis-4/12 space-x-6 justify-end text-sm">
                <button className="border border-primary text-primary px-5 py-2.5 rounded-md">
                    Sign in
                </button>
                <button className="border border-primary bg-primary px-5 py-2.5 rounded-md">
                    Register
                </button>
            </div>
        </div>
    );
}
