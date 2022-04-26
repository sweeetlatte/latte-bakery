import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchBlogData } from "../../../app/api";
import { IBlog } from "../../../types";

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
            {blogData.map((blogItem) => (
                <Link
                    key={blogItem.id}
                    to="/blog/detail"
                    className="w-1/2 max-w-[326px] mx-9 pb-14"
                >
                    <img
                        className="h-56 w-full object-cover"
                        src={blogItem?.image}
                        alt="blog 8"
                    />
                    <div className="px-3 pt-5 font-light">
                        <div>
                            {blogItem?.createdAt} &ensp;/&ensp; by&nbsp;
                            <span className="text-primary">
                                {blogItem?.author}
                            </span>
                        </div>
                        <div className="pt-3.5">{blogItem?.name}</div>
                    </div>
                </Link>
            ))}
        </>
    ) : (
        <></>
    );
}
