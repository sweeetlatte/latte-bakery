import React from "react";

export default function Blog() {
    return (
        <>
            <div className="font-title text-[200px] text-white-rgba text-left pl-28 absolute top-14">
                Blog
            </div>
            <div className="flex pl-36 pt-28 justify-between items-center">
                <div className="font-title text-7xl text-left">Blog</div>
                <button className="border border-primary bg-primary px-10 rounded-md w-fit h-[44px] ">
                    View all
                </button>
            </div>
        </>
    );
}
