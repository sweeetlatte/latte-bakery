import { useState } from "react";
import { Link } from "react-router-dom";

import Icons from "../Icons";

interface Props {
    executeAboutUsScroll?: () => void;
    executeProductsScroll?: () => void;
    executeBlogScroll?: () => void;
    executeGetInTouchScroll?: () => void;
}

export default function Navbar({
    executeAboutUsScroll,
    executeProductsScroll,
    executeBlogScroll,
    executeGetInTouchScroll,
}: Props) {
    const [showNavbar, setShowNavbar] = useState<boolean | null>(null);
    const navBarActionMap = {
        null: "hidden",
        true: "in-left",
        false: "out-left",
    };

    return (
        <div className="md:relative px-16 lg:px-8 flex items-center py-5 sm:text-left">
            <div
                className={
                    !showNavbar
                        ? "hidden md:block md:basis-1/3"
                        : "absolute top-7 right-4 z-50 in-left"
                }
                style={{ "--duration": "2s" } as React.CSSProperties}
                onClick={() => setShowNavbar(!showNavbar)}
            >
                <div className={`container ${showNavbar && "change"}`}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
            {
                <>
                    <div
                        className={`z-40 fixed top-0 left-0 w-2/3 sm:w-full bg-light flex flex-col h-screen justify-between text-left text-sm p-6 sm:p-5 ${
                            navBarActionMap[`${showNavbar}`]
                        }`}
                        style={{ "--duration": "2s" } as React.CSSProperties}
                    >
                        <div>
                            <Link
                                to="/"
                                className="block text-center text-primary text-3xl font-semibold font-brand"
                            >
                                BAKERY
                            </Link>
                            {/* <div
                                className="absolute top-7 right-4"
                                onClick={() => setShowNavbar(false)}
                            >
                                <Icons.X />
                            </div> */}
                            <div className="pt-16 flex flex-col space-y-5 w-full">
                                <div>
                                    <Link to="/">About us</Link>
                                    <div className="bg-underline w-full h-[0.5px] mt-5" />
                                </div>
                                <div>
                                    <Link to="/">Products</Link>
                                    <div className="bg-underline w-full h-[0.5px] mt-5" />
                                </div>
                                <div>
                                    <Link to="/blog">Blog</Link>
                                    <div className="bg-underline w-full h-[0.5px] mt-5" />
                                </div>
                                <Link to="/">Contact</Link>
                            </div>
                        </div>
                        <div className="flex space-x-5 text-sm text-center pb-4">
                            <Link
                                to="/register"
                                className="w-full border border-primary text-primary px-5 py-2.5 rounded-md"
                            >
                                Register
                            </Link>
                            <Link
                                to="/login"
                                className="w-full border border-primary bg-primary px-5 py-2.5 rounded-md"
                            >
                                Log in
                            </Link>
                        </div>
                    </div>
                    {showNavbar && (
                        <div
                            className="__mask-modal"
                            onClick={() => setShowNavbar(false)}
                        ></div>
                    )}
                </>
            }
            <div className="md:hidden basis-1/3 flex justify-between text-left text-sm">
                <Link
                    to="/"
                    onClick={() =>
                        executeAboutUsScroll && executeAboutUsScroll()
                    }
                >
                    About us
                </Link>
                <Link
                    to="/"
                    onClick={() =>
                        executeProductsScroll && executeProductsScroll()
                    }
                >
                    Products
                </Link>
                <Link
                    to="/"
                    onClick={() => executeBlogScroll && executeBlogScroll()}
                >
                    Blog
                </Link>
                <Link
                    to="/"
                    onClick={() =>
                        executeGetInTouchScroll && executeGetInTouchScroll()
                    }
                >
                    Contact
                </Link>
            </div>
            <Link
                to="/"
                className="basis-1/3 text-center text-primary text-3xl font-semibold font-brand"
            >
                BAKERY
            </Link>
            <div className="md:basis-1/3"></div>
            <div className="md:hidden flex basis-1/3 space-x-6 justify-end text-sm">
                <Link
                    to="/register"
                    className="border border-primary text-primary px-5 py-2.5 rounded-md"
                >
                    Register
                </Link>
                <Link
                    to="/login"
                    className="border border-primary bg-primary px-5 py-2.5 rounded-md"
                >
                    Log in
                </Link>
            </div>
        </div>
    );
}
