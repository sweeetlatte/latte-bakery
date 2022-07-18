import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                setBlogData(responseData);
            }
        })();
    }, []);

    return blogData ? (
        <>
            <SectionTitle title={"Blog"} variant="one-button" linkTo="/blog" />
            <div className="w-full mx-auto space-y-12">
                {randomNumber(blogData, 2).map((blogItem, index) => (
                    <div key={index} className="flex">
                        <div className="basis-5/12">
                            <img
                                className="w-full h-72 object-cover"
                                src={blogItem.image}
                                alt="blog"
                            />
                        </div>
                        <div className="basis-7/12 h-72 pl-12 text-left flex flex-col justify-between">
                            <div>
                                <div className="text-lg uppercase">
                                    {blogItem.name}
                                </div>
                                <div
                                    className="pt-6 text-overflow h-48 text-justify"
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
        </>
    ) : (
        <></>
    );
}
