import React from "react";

import Icons from "../Icons";

import ava from "../../assets/images/blog/detail/detail-1.png";

export default function Review() {
    return (
        <div className="flex space-x-4">
            <img
                className="w-[36px] h-[36px] object-cover rounded-full"
                src={ava}
                alt="ava"
            />
            <div className="w-full">
                <div className="flex w-full justify-between items-center pb-2">
                    <div>
                        <div className="font-medium pb-1">Sweet Latte</div>
                        <div>🤎🤎🤎🤎🤎</div>
                    </div>
                    <div className="flex space-x-5">
                        <Icons.ThumbsDown />
                        <Icons.ThumbsUp />
                    </div>
                </div>
                <div className="bg-light p-3 rounded-lg">
                    The cake taste great!!!
                </div>
            </div>
        </div>
    );
}
