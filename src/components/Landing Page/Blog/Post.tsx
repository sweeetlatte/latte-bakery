import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchBlogData } from "../../../app/api";
import { IBlog } from "../../../types";

export default function Post() {
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
            {blogData.map((blogItem) => (
                <div className="pb-9 flex items-center">
                    <Link to="/blog/detail">
                        <img
                            className="w-[133px] h-[123px] object-cover"
                            src={blogItem?.image}
                            alt="post"
                        />
                    </Link>
                    <div className="pl-3 text-sm basis-9/12">
                        <Link
                            to="/blog/detail"
                            className="font-light pb-3.5 text-overflow h-[44px]"
                        >
                            {blogItem?.name}
                        </Link>
                        <div className="font-extralight">25 minutes ago</div>
                    </div>
                </div>
            ))}
        </>
    ) : (
        <></>
    );
}
