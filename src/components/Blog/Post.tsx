import React from "react";
import { Link } from "react-router-dom";

import post1 from "../../assets/images/blog/blog-11.png";

export default function Post() {
    return (
        <div className="pb-9 flex items-center">
            <Link to="/blog/detail" className="w-[133px]">
                <img
                    className="w-full h-[123px] object-cover"
                    src={post1}
                    alt="post 1"
                />
            </Link>
            <div className="pl-3 text-sm basis-9/12">
                <Link
                    to="/blog/detail"
                    className="font-light pb-3.5 text-overflow h-[44px]"
                >
                    SMOKEY BOURBON TOFFEE CHOCOLATE OAT COOKIES
                </Link>
                <div className="font-extralight">25 minutes ago</div>
            </div>
        </div>
    );
}
