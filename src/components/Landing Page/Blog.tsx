import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./landingPage.css";

import { fetchBlogData } from "../../app/api";
import { IBlog } from "../../types";
import { randomNumber } from "../../utils/functions";

import SectionTitle from "./SectionTitle";

export default function Blog() {
    const [blogData, setBlogData] = useState<IBlog[]>();

    useEffect(() => {
        (async () => {
            const responseData = await fetchBlogData();

            if (responseData) {
                setBlogData(randomNumber(responseData, 2));
            }
        })();
    }, []);

    return blogData ? (
        <>
            <SectionTitle title={"Blog"} variant="one-button" linkTo="/blog" />
            <div className="w-full mx-auto space-y-12 lg:space-y-9 md:space-y-6">
                {blogData.map((blogItem, index) => (
                    <div key={index} className="flex space-x-12 md:space-x-6">
                        <div className="basis-2/5">
                            <img
                                className="w-full h-72 xl:h-52 lg:h-40 md:h-32 object-cover"
                                src={blogItem.image}
                                alt="blog"
                            />
                        </div>
                        <div className="basis-3/5 text-left flex flex-col justify-between">
                            <div className="space-y-4 xl:space-y-2">
                                <div
                                    className="text-lg md:text-base uppercase text-overflow"
                                    style={{ WebkitLineClamp: 1 }}
                                >
                                    {blogItem.name}
                                </div>
                                <div className="text-overflow blog-item-content">
                                    {blogItem.content}
                                </div>
                            </div>
                            <Link
                                to="/blog/detail"
                                state={{ detail: blogItem }}
                            >
                                <button className="filled-button">
                                    See more
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    ) : (
        <></>
    );
}
