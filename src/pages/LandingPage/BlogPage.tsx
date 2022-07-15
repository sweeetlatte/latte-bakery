import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Landing Page/Navbar";
import SearchBar from "../../components/SearchBar";
import Blog from "../../components/Landing Page/Blog/Blog";
import Post from "../../components/Landing Page/Blog/Post";
import CustomSelectBox from "../../components/CustomSelectBox";

export default function BlogPage() {
    const month = [
        { value: "january", label: "January" },
        { value: "february", label: "February" },
        { value: "march", label: "March" },
        { value: "april", label: "April" },
        { value: "may", label: "May" },
        { value: "june", label: "June" },
        { value: "july", label: "July" },
        { value: "august", label: "August" },
        { value: "september", label: "September" },
        { value: "october", label: "October" },
        { value: "november", label: "November" },
        { value: "december", label: "December" },
    ];

    const year = [
        { value: "2022", label: "2022" },
        { value: "2021", label: "2021" },
        { value: "2020", label: "2020" },
    ];

    const [type, setType] = useState<string>("Breads and rolls");

    var element = document.getElementsByClassName(
        "active-blog-tab"
    ) as HTMLCollectionOf<HTMLElement>;

    const [offsetWidth, setWidth] = useState<string>("");
    const [offsetLeft, setLeft] = useState<string>("");

    useEffect(() => {
        if (element) {
            setWidth(`${element[0].offsetWidth}px`);
            setLeft(`${element[0].offsetLeft}px`);
        }
    }, [element, type]);

    return (
        <div className="font-body text-center mx-auto bg-light text-white">
            <Navbar />
            <div className="pt-10 lg:pt-6 px-16 lg:px-8 text-left">
                <div className="flex text-lg xl:text-base">
                    <Link to="/">Home</Link>
                    &nbsp;/&nbsp;
                    <Link to="/blog" className="text-primary">
                        Blog
                    </Link>
                </div>
                <div className="pt-11 xl:pt-7 text-5xl xl:text-4xl">Blog</div>
                <div className="flex md:flex-col space-x-9 lg:space-x-8 md:space-x-0 mb-6">
                    <div className="pr-16 lg:pr-8 md:pr-0 basis-9/12 border-right">
                        <div className="flex sm:flex-col sm:space-y-3 items-center pt-14 xl:pt-10 pb-12 xl:pb-8">
                            <div className="basis-[52%] xl:basis-1/2 sm:w-full">
                                <SearchBar />
                            </div>
                            <div className="basis-[48%] xl:basis-1/2 xl:text-sm flex pl-9 lg:pl-5 sm:pl-0 space-x-5 sm:w-full">
                                <div className="basis-1/2">
                                    <CustomSelectBox
                                        width={"full"}
                                        data={month}
                                        placeholder={"Select month"}
                                    />
                                </div>
                                <div className="basis-1/2">
                                    <CustomSelectBox
                                        width={"full"}
                                        data={year}
                                        placeholder={"Select year"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="tab-bar">
                            <div
                                className={
                                    type === "Breads and rolls"
                                        ? `active-blog-tab cursor-pointer`
                                        : "cursor-pointer"
                                }
                                onClick={() => {
                                    setType("Breads and rolls");
                                }}
                            >
                                Breads and rolls
                            </div>
                            <div
                                className={
                                    type === "Cheesecake"
                                        ? `active-blog-tab cursor-pointer`
                                        : "cursor-pointer"
                                }
                                onClick={() => {
                                    setType("Cheesecake");
                                }}
                            >
                                Cheesecake
                            </div>
                            <div
                                className={
                                    type === "Caramel"
                                        ? `active-blog-tab cursor-pointer`
                                        : "cursor-pointer"
                                }
                                onClick={() => {
                                    setType("Caramel");
                                }}
                            >
                                Caramel
                            </div>
                            <div
                                className={
                                    type === "Dairy free"
                                        ? `active-blog-tab cursor-pointer`
                                        : "cursor-pointer"
                                }
                                onClick={() => {
                                    setType("Dairy free");
                                }}
                            >
                                Dairy free
                            </div>
                            <div
                                className={
                                    type === "Peanut butter"
                                        ? `active-blog-tab cursor-pointer`
                                        : "cursor-pointer"
                                }
                                onClick={() => {
                                    setType("Peanut butter");
                                }}
                            >
                                Peanut butter
                            </div>
                            <div
                                className={
                                    type === "Cookies"
                                        ? `active-blog-tab cursor-pointer`
                                        : "cursor-pointer"
                                }
                                onClick={() => {
                                    setType("Cookies");
                                }}
                            >
                                Cookies
                            </div>
                            <div
                                className="line"
                                style={{ width: offsetWidth, left: offsetLeft }}
                            ></div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-1 pt-20 xl:pt-12 w-full auto-cols-max mx-auto place-items-center place-self-center">
                            <Blog type={type} />
                        </div>
                    </div>
                    <div className="basis-3/12 md:flex pt-14 xl:pt-10 sm:pt-0">
                        <div className="md:basis-1/2">
                            <div className="text-xl">New post</div>
                            <div className="pt-9 lg:pt-5">
                                <Post />
                            </div>
                        </div>
                        <div className="pt-2.5 md:pt-0 md:basis-1/2">
                            <div className="text-xl">Popular</div>
                            <div className="pt-9 lg:pt-5">
                                <Post />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
