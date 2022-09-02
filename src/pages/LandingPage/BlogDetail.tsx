import { useEffect, useState } from "react";
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
            <div className="font-body text-center mx-auto bg-light text-white xl:text-sm md:text-sm">
                <Navbar />
                <div className="pt-10 px-16 lg:px-8 text-left">
                    <div className="flex text-lg xl:text-base md:text-sm">
                        <Link to="/">Home</Link>
                        &nbsp;/&nbsp;
                        <Link to="/blog">Blog</Link>
                        &nbsp;/&nbsp;
                        <div className="text-primary">{blogDetail.type}</div>
                    </div>
                    <div className="flex space-x-9 sm:flex-col sm:space-x-0">
                        <div className="basis-9/12 ">
                            <div className="pt-11 text-4xl lg:text-3xl md:text-2xl font-light leading-[3.5rem]">
                                {blogDetail.name}
                            </div>
                            <div className="pt-12 underline underline-offset-[18px] text-lightText decoration-lightText decoration-1">
                                {blogDetail.createdAt} &ensp;/&ensp; by&nbsp;
                                <span className="text-primary">
                                    {blogDetail.author}
                                </span>
                            </div>
                            <div className="pt-20 lg:pt-16 mb-14">
                                {blogDetail.content}
                            </div>
                        </div>
                        <div className="basis-3/12">
                            <div className="pt-11 pl-12 lg:pl-10 sm:pl-0 mb-10 border-left">
                                <div className="text-xl lg:text-lg">
                                    Popular
                                </div>
                                <div className="pt-9 lg:pt-7">
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
