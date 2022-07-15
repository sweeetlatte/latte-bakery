import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchBlogData } from "../../../app/api";
import { IBlog } from "../../../types";

interface Props {
    type: string;
}

export default function Blog({ type }: Props) {
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
            {blogData
                .filter((item: IBlog) => item.type === type)
                .map((blogItem) => (
                    <Link
                        key={blogItem.id}
                        state={{ detail: blogItem }}
                        to="/blog/detail"
                        className="w-[326px] xl:w-[236px] lg:w-[200px] mx-9 pb-14 xl:pb-8"
                    >
                        <img
                            className="h-56 xl:h-40 lg:h-32 w-full object-cover"
                            src={blogItem?.image}
                            alt="blog 8"
                        />
                        <div className="px-3 pt-5 xl:pt-4 font-light">
                            <div
                                className="text-xs md:text-[10px] text-overflow"
                                style={{ WebkitLineClamp: 1 }}
                            >
                                {blogItem?.createdAt} &ensp;/&ensp; by&nbsp;
                                <span className="text-primary">
                                    {blogItem?.author}
                                </span>
                            </div>
                            <div
                                className="pt-3.5 xl:pt-2 text-overflow md:text-sm"
                                style={{ WebkitLineClamp: 1 }}
                            >
                                {blogItem?.name}
                            </div>
                        </div>
                    </Link>
                ))}
        </>
    ) : (
        <></>
    );
}
