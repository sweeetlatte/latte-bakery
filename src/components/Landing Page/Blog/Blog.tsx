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
                        className="w-[326px] xl:w-[236px] mx-9 pb-14 xl:pb-6"
                    >
                        <img
                            className="h-56 xl:h-40 w-full object-cover"
                            src={blogItem?.image}
                            alt="blog 8"
                        />
                        <div className="px-3 pt-5 font-light">
                            <div
                                className="text-sm text-overflow"
                                style={{ WebkitLineClamp: 1 }}
                            >
                                {blogItem?.createdAt} &ensp;/&ensp; by&nbsp;
                                <span className="text-primary">
                                    {blogItem?.author}
                                </span>
                            </div>
                            <div
                                className="pt-3.5 text-overflow"
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
