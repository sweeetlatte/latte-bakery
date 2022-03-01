import React from "react";

export default function Navbar() {
    return (
        <div className="px-6 flex items-center py-5">
            <div className="flex basis-4/12 justify-between text-sm">
                <div>Products</div>
                <div>About us</div>
                <div>Blog</div>
                <div>Contact</div>
            </div>
            <div className="basis-4/12 text-primary text-3xl font-semibold font-brand">
                BAKERY
            </div>
            <div className="flex basis-4/12 space-x-6 justify-end text-sm">
                <div className="border border-primary text-primary px-5 py-2.5 rounded-md">
                    Sign in
                </div>
                <div className="border border-primary bg-primary px-5 py-2.5 rounded-md">
                    Register
                </div>
            </div>
        </div>
    );
}
