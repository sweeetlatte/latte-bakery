import React from "react";

import Navbar from "../Navbar";

import roller from "../../assets/images/roller.png";

export default function HeroSection() {
    return (
        <div className="h-screen navbar">
            <div className="fixed w-full top-0 z-50">
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
                <button className="border border-primary bg-primary px-5 py-2.5 rounded-md w-fit">
                    Shop now
                </button>
            </div>
            <div className="pt-[5.6rem]">
                <img className="mx-auto" src={roller} alt="dough roller" />
            </div>
        </div>
    );
}
