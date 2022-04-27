import React, { useState } from "react";

import Icons from "../Icons";

import ava from "../../assets/images/about-1.png";

export default function Review() {
    const [isHover, setIsHover] = useState<null | boolean>(null);
    const [isClick, setIsClick] = useState<null | boolean>(null);

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
                        <div
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(null)}
                            onClick={() => {
                                setIsClick(true);
                            }}
                        >
                            <Icons.ThumbsDown
                                stroke={
                                    isHover === true ? "#F3A446" : "#FFFFFF"
                                }
                                fill={isClick === true ? "#F3A446" : "none"}
                            />
                        </div>
                        <div
                            onMouseEnter={() => setIsHover(false)}
                            onMouseLeave={() => setIsHover(null)}
                            onClick={() => {
                                setIsClick(false);
                            }}
                        >
                            <Icons.ThumbsUp
                                stroke={
                                    isHover === false ? "#F3A446" : "#FFFFFF"
                                }
                                fill={isClick === false ? "#F3A446" : "none"}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-light p-3 rounded-lg">
                    The cake taste great!!!
                </div>
            </div>
        </div>
    );
}
