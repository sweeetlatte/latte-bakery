import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchBlogData } from "../../../app/api";
import { IBlog } from "../../../types";
import { randomNumber } from "../../../utils/functions";

export default function Post() {
    const [blogData, setBlogData] = useState<IBlog[]>();

    useEffect(() => {
        (async () => {
            const responseData = await fetchBlogData();

            if (responseData) {
                setBlogData(randomNumber(responseData, 3));
            }
        })();
    }, []);

    return blogData ? (
        <>
            {blogData.map((blogItem, index) => (
                <div className="flex items-center pb-9 lg:pb-5" key={index}>
                    <Link to="/blog/detail" state={{ detail: blogItem }}>
                        <div className="w-[123px] xl:w-[101px] lg:w-[70px] h-[123px] xl:h-[101px] lg:h-[70px]">
                            <img
                                className="w-full h-full object-cover"
                                src={blogItem?.image}
                                alt="post"
                            />
                        </div>
                    </Link>
                    <div className="pl-3 basis-9/12">
                        <Link
                            to="/blog/detail"
                            className="font-light text-overflow lg:text-sm h-[44px] hover:text-primary"
                            style={{ WebkitLineClamp: 2 }}
                        >
                            {blogItem?.name}
                        </Link>
                        <div className="font-extralight text-sm lg:text-xs md:text-[10px] pt-3.5 md:pt-0">
                            25 minutes ago
                        </div>
                    </div>
                </div>
            ))}
        </>
    ) : (
        <></>
    );
}
