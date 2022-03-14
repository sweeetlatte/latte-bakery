import React from "react";

import post1 from "../../assets/images/blog/blog-11.png";

export default function Post() {
    return (
        <div className="pb-9 flex items-center">
            <img
                className="w-[133px] h-[123px] object-cover"
                src={post1}
                alt="post 1"
            />
            <div className="pl-3 text-sm">
                <div className="font-light pb-3.5 text-overflow h-[44px]">
                    SMOKEY BOURBON TOFFEE CHOCOLATE OAT COOKIES
                </div>
                <div>25 minutes ago</div>
            </div>
        </div>
    );
}
