import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { fetchBlogData } from "../../app/api";
import { IBlog } from "../../types";

import Navbar from "../../components/Landing Page/Navbar";
import Post from "../../components/Landing Page/Blog/Post";
import Loader from "../../components/Loader";

interface IBlogDetail {
    detail: IBlog;
    from?: {
        pathname: string;
    };
}

export default function BlogDetail() {
    const [blogData, setBlogData] = useState<IBlog[]>();

    useEffect(() => {
        (async () => {
            const responseData = await fetchBlogData();

            if (responseData) {
                setBlogData(responseData);
            }
        })();
    }, []);

    const location = useLocation();

    const state = (location.state as IBlogDetail) || {
        from: { pathname: "/" },
    };
    // console.log(location);

    const blogDetail = state?.detail ?? null;

    return blogData ? (
        <>
            <div className="font-body text-center mx-auto bg-light text-white">
                <Navbar />
                <div className="pt-10 pl-28 pr-20 text-left">
                    <div className="text-lg flex">
                        <Link to="/">Home</Link>
                        &nbsp;/&nbsp;
                        <Link to="/blog">Blog</Link>
                        &nbsp;/&nbsp;
                        <div className="text-primary">{blogDetail.type}</div>
                    </div>
                    <div className="flex space-x-9">
                        <div className="basis-9/12 ">
                            <div className="pt-11 text-4xl font-light leading-[3.5rem]">
                                {blogDetail.name}
                            </div>
                            <div className="pt-12 text-lg underline underline-offset-[18px] text-lightText decoration-lightText decoration-1">
                                {blogDetail.createdAt} &ensp;/&ensp; by&nbsp;
                                <span className="text-primary">
                                    {blogDetail.author}
                                </span>
                            </div>
                            <div
                                className="pt-20 text-lg mb-14"
                            >
                                {blogDetail.content}
                            </div>
                        </div>
                        <div className="basis-3/12">
                            <div className="pt-[14.15rem] pl-16 mb-10" 
                                style={{ borderLeft: "1px solid white" }}
                                >
                                <div className="text-xl">Popular</div>
                                <div className="pt-9">
                                    <Post />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <Loader />
    );
}
