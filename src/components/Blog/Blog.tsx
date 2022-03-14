import React from "react";

import blog8 from "../../assets/images/blog/blog-8.png";

export default function Blog() {
    return (
        <div className="max-w-[326px]">
            <img src={blog8} alt="blog 8" />
            <div className="px-3 pt-5 font-light">
                <div>
                    July 25, 2021 / by{" "}
                    <span className="text-primary">Jenna</span>
                </div>
                <div className="pt-3.5">SMOKEY BOURBON TOFFEE CHOCOLATE OAT COOKIES
</div>
            </div>
        </div>
    );
}
