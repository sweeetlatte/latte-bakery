import React from "react";

import banner1 from "../assets/banner-1.png";

export default function Carousel() {
    return (
        <div className="w-screen h-screen absolute top-0">
            <img src={banner1} alt="" />
        </div>
    );
}
