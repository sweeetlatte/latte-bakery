import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

import roller from "./assets/roller.png";
import about1 from "./assets/images/about-1.png";

// config tailwindcss
import "./main.css";

function App() {
    return (
        <div className="font-body text-center mx-auto bg-dark-bg text-white">
            <div className="w-screen h-screen navbar">
                <Navbar />
                {/* <Carousel /> */}
                <div>
                    <div className="font-title text-[144px] pt-44">
                        Pastry with love
                    </div>
                    <div className="text-2xl w-[33rem] mx-auto pb-8">
                        We're bringing you fresh ingredients everyday in ways
                        you can't resist
                    </div>
                    <button className="border border-primary bg-primary px-5 py-2.5 rounded-md w-fit">
                        Shop now
                    </button>
                </div>
                <div className="pt-[18.5rem]">
                    <img className="mx-auto" src={roller} alt="dough roller" />
                </div>
                <div className="relative">
                    <div className="font-title text-7xl text-left pl-36 pt-28">
                        About us
                    </div>
                    <div className="font-title text-[200px] text-white-rgba text-left pl-28 absolute top-0">
                        About us
                    </div>
                    {/* <img className="pt-16" src={about1} alt="image" /> */}
                </div>
            </div>
        </div>
    );
}

export default App;
