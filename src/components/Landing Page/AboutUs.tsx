import React from "react";

import bread1 from "../../assets/images/bread-1.svg";
import about1 from "../../assets/images/about-1.png";
import about2 from "../../assets/images/about-2.png";
import SectionTitle from "./SectionTitle";

export default function AboutUs() {
    return (
        <div className="relative">
            <SectionTitle title={"About us"} />
            <img
                className="absolute right-0 top-40"
                src={bread1}
                alt="bread-1"
            />
            <div className="w-[66.25rem] mx-auto">
                <img src={about1} alt="about-1" />
                <div className="pt-7 flex">
                    <img src={about2} alt="about-2" />
                    <div className="pl-12 pt-16 text-left">
                        <div className="text-lg">
                            SMOKEY BOURBON TOFFEE CHOCOLATE OAT COOKIES
                        </div>
                        <div className="pt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Porttitor vulputate cursus id erat purus quam.
                            Semper egestas ipsum pellentesque sollicitudin. Nunc
                            pellentesque ut posuere condimentum nulla. Imperdiet
                            mauris accumsan elit varius posuere lectus in
                            habitant sed.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
