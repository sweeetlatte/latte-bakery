import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import roller from "../../assets/images/roller.png";

interface Props {
    navBarProps: NavBarProps;
}

interface NavBarProps {
    executeAboutUsScroll: () => void;
    executeProductsScroll: () => void;
    executeBlogScroll: () => void;
    executeGetInTouchScroll: () => void;
}

export default function HeroSection({ navBarProps }: Props) {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = (e: any) => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > oldScroll.current);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, []);

    let alpha = useRef(0);
    let oldScroll = useRef(0);

    useEffect(() => {
        var navbar = document.getElementById("navbar");
        let color = `rgba(29,30,30,${alpha.current})`;

        if (scrollTop === 0) alpha.current = 0;
        else if (scrolling && alpha.current < 1) {
            alpha.current + 0.015 > 1
                ? (alpha.current = 1)
                : (alpha.current += 0.015);
        } else if (!scrolling && alpha.current > 0) {
            alpha.current - 0.015 < 0
                ? (alpha.current = 0)
                : (alpha.current -= 0.015);
        }

        oldScroll.current = scrollTop;

        // "!": non-null assertion operator
        navbar!.style.backgroundColor = color;
    }, [scrollTop, scrolling]);

    return (
        <div className="relative flex justify-center h-screen hero-section">
            <div id="navbar" className="fixed w-full top-0 z-50">
                <Navbar {...navBarProps} />
            </div>
            {/* <Carousel /> */}
            <div className="self-center">
                <div className="font-title text-[144px] lg:text-[100px] sm:text-[58px]">
                    Pastry with love
                </div>
                <div className="text-2xl xl:text-xl lg:text-lg sm:text-base w-[33rem] sm:w-[19rem] mx-auto pb-8">
                    We're bringing you fresh ingredients everyday in ways you
                    can't resist
                </div>
                <Link to="dashboard/product" className="filled-button w-fit">
                    Shop now
                </Link>
            </div>
            <div className="absolute bottom-[-10.65rem] lg:bottom-[-6.9rem] sm:-bottom-9 lg:w-96 sm:w-32">
                <img src={roller} alt="dough roller" />
            </div>
        </div>
    );
}
