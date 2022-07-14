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
                        <img
                            className="w-[133px] h-[123px] xl:h-[101px] lg:h-[90px] object-cover"
                            src={blogItem?.image}
                            alt="post"
                        />
                    </Link>
                    <div className="pl-3 text-sm basis-9/12">
                        <Link
                            to="/blog/detail"
                            className="font-light pb-3.5 text-overflow h-[44px] hover:text-primary"
                            style={{ WebkitLineClamp: 2 }}
                        >
                            {blogItem?.name}
                        </Link>
                        <div className="font-extralight text-sm lg:text-xs">
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
