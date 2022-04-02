import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Navbar";

import roller from "../../assets/images/roller.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = (e: any) => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, []);

    let alpha = useRef(0);
    console.log("2", scrolling);
    useEffect(() => {
        console.log("1", scrollTop);

        var navbar = document.getElementById("navbar");
        if (alpha.current < 1) alpha.current = alpha.current + 0.01;
        let color = `rgba(29,30,30,${alpha.current})`;
        console.log("alpha", alpha.current);

        // "!": non-null assertion operator
        navbar!.style.backgroundColor = color;
    }, [scrollTop]);

    return (
        <div className="h-screen hero-section">
            <div className="fixed w-full top-0 z-50" id="navbar">
                <Navbar />
            </div>
            {/* <Carousel /> */}
            <div>
                <div className="font-title text-[144px] pt-44">
                    Pastry with love
                </div>
                <div className="text-2xl w-[33rem] mx-auto pb-8">
                    We're bringing you fresh ingredients everyday in ways you
                    can't resist
                </div>
                <Link
                    to="dashboard/product"
                    className="border border-primary bg-primary px-5 py-2.5 rounded-md w-fit"
                >
                    Shop now
                </Link>
            </div>
            <div className="pt-[5.6rem]">
                <img className="mx-auto" src={roller} alt="dough roller" />
            </div>
        </div>
    );
}
