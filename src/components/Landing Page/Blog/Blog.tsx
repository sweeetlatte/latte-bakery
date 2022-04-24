import React from "react";
import { Link } from "react-router-dom";

import blog8 from "../../../assets/images/blog/blog-8.png";

export default function Blog() {
    return (
        <Link to="/blog/detail" className="max-w-[326px]">
            <img src={blog8} alt="blog 8" />
            <div className="px-3 pt-5 font-light">
                <div>
                    July 25, 2021 &ensp;/&ensp; by&nbsp;
                    <span className="text-primary">Jenna</span>
                </div>
                <div className="pt-3.5">
                    SMOKEY BOURBON TOFFEE CHOCOLATE OAT COOKIES
                </div>
            </div>
        </Link>
    );
}
