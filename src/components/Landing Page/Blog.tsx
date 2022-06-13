import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogData } from "../../app/api";
import { IBlog } from "../../types";
import { randomNumber } from "../../utils/functions";

export default function Blog() {
    const [blogData, setBlogData] = useState<IBlog[]>();

    useEffect(() => {
        (async () => {
            const responseData = await fetchBlogData();

            if (responseData) {
                setBlogData(responseData);
            }
        })();
    }, []);

    return blogData ? (
        <>
            <div className="pb-56">
                <div className="relative pt-20 pr-[9.875rem]">
                    <div className="font-title text-[200px] text-white-rgba text-left pl-28 absolute top-14">
                        Blog
                    </div>
                    <div className="flex pl-36 pt-28 justify-between items-center">
                        <div className="font-title text-7xl text-left">
                            Blog
                        </div>
                        <Link to="/blog">
                            <button className="border border-primary bg-primary px-10 rounded-md w-fit h-[44px]">
                                View all
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-[66.25rem] mx-auto pt-28 space-y-12">
                    {randomNumber(blogData, 2).map((blogItem) => (
                        <div className="flex">
                            <div className="basis-5/12">
                                <img
                                    className="w-full h-72 object-cover"
                                    src={blogItem.image}
                                    alt="blog"
                                />
                            </div>
                            <div className="basis-7/12 h-72 pl-12 text-left flex flex-col justify-between">
                                <div>
                                    <div className="text-lg">
                                        {blogItem.name}
                                    </div>
                                    <div
                                        className="pt-6 text-overflow h-48"
                                        style={{ WebkitLineClamp: 7 }}
                                    >
                                        {blogItem.content}
                                    </div>
                                </div>
                                <Link
                                    to="/blog/detail"
                                    state={{ detail: blogItem }}
                                >
                                    <button className="border border-primary bg-primary px-10 rounded-md w-fit h-[44px] ">
                                        See more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}
