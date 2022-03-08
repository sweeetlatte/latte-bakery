import React from "react";

import HeroSection from "../components/Landing Page/HeroSection";
// import Carousel from "./components/Landing Page/Carousel";
import Products from "../components/Landing Page/Products";
import AboutUs from "../components/Landing Page/AboutUs";

export default function LandingPage() {
    return (
        <div>
            <HeroSection />
            <AboutUs />
            <div className="relative pt-20 pr-[9.875rem]">
                <Products />
            </div>
        </div>
    );
}
