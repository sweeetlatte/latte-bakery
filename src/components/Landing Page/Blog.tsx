import React from "react";
import { Link } from "react-router-dom";

import blog1 from "../../assets/images/blog-1.png";
import blog2 from "../../assets/images/blog-2.png";

export default function Blog() {
    return (
        <>
            <div className="relative pt-20 pr-[9.875rem]">
                <div className="font-title text-[200px] text-white-rgba text-left pl-28 absolute top-14">
                    Blog
                </div>
                <div className="flex pl-36 pt-28 justify-between items-center">
                    <div className="font-title text-7xl text-left">Blog</div>
                    <Link to="/blog">
                        <button className="border border-primary bg-primary px-10 rounded-md w-fit h-[44px]">
                            View all
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-[66.25rem] mx-auto pt-28">
                <div className="flex">
                    <img src={blog1} alt="blog 1" />
                    <div className="pl-12 text-left flex flex-col justify-between">
                        <div>
                            <div className="text-lg">
                                SMOKEY BOURBON TOFFEE CHOCOLATE OAT COOKIES
                            </div>
                            <div className="pt-6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Porttitor vulputate cursus id
                                erat purus quam. Semper egestas ipsum
                                pellentesque sollicitudin. Nunc pellentesque ut
                                posuere condimentum nulla. Imperdiet mauris
                                accumsan elit varius posuere lectus in habitant
                                sed.
                            </div>
                        </div>
                        <Link to="/blog/detail">
                            <button className="border border-primary bg-primary px-10 rounded-md w-fit h-[44px] ">
                                See more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex pt-24">
                    <img src={blog2} alt="blog 2" />
                    <div className="pl-12 text-left flex flex-col justify-between">
                        <div>
                            <div className="text-lg">
                                SMOKEY BOURBON TOFFEE CHOCOLATE OAT COOKIES
                            </div>
                            <div className="pt-6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Porttitor vulputate cursus id
                                erat purus quam. Semper egestas ipsum
                                pellentesque sollicitudin. Nunc pellentesque ut
                                posuere condimentum nulla. Imperdiet mauris
                                accumsan elit varius posuere lectus in habitant
                                sed.
                            </div>
                        </div>
                        <button className="border border-primary bg-primary px-10 rounded-md w-fit h-[44px] ">
                            See more
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
