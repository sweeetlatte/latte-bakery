import { useState } from "react";
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

    const [active, setActive] = useState<string>("");

    // const [offsetWidth, setWidth] = useState<string>();

    return (
        <div className="font-body text-center mx-auto bg-light text-white">
            <Navbar />
            <div className="pt-10 pl-28 pr-20 text-left">
                <div className="text-lg flex">
                    <Link to="/">Home</Link>
                    &nbsp;/&nbsp;
                    <Link to="/blog" className="text-primary">
                        Blog
                    </Link>
                </div>
                <div className="pt-11 text-5xl">Blog</div>
                <div className="flex pt-14 pb-12">
                    <SearchBar />
                    <div className="flex pl-9 space-x-5">
                        <CustomSelectBox
                            width={"12rem"}
                            data={month}
                            placeholder={"Select month"}
                        />
                        <CustomSelectBox
                            width={"12rem"}
                            data={year}
                            placeholder={"Select year"}
                        />
                    </div>
                </div>
                <div className="flex space-x-9">
                    <div
                        className="pr-16 basis-9/12 mb-14"
                        style={{ borderRight: "1px solid white" }}
                    >
                        <div className="flex justify-between text-lg tab-bar py-7 px-3 relative">
                            <div
                                className={`${active} cursor-pointer`}
                                onClick={() => {
                                    setType("Breads and rolls");
                                }}
                            >
                                Breads and rolls
                            </div>
                            <div
                                className={`${active} cursor-pointer`}
                                onClick={() => {
                                    setType("Cheesecake");
                                }}
                            >
                                Cheesecake
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    setType("Caramel");
                                }}
                            >
                                Caramel
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    setType("Dairy free");
                                }}
                            >
                                Dairy free
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    setType("Peanut butter");
                                }}
                            >
                                Peanut butter
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    setType("Cookies");
                                }}
                            >
                                Cookies
                            </div>
                            {/* <div
                                className="line"
                                style={{ width: offsetWidth }}
                            ></div> */}
                        </div>
                        <div className="flex flex-wrap pt-24 w-full justify-center">
                            <Blog type={type} />
                        </div>
                    </div>
                    <div className="basis-3/12">
                        <div className="">
                            <div className="text-xl">New post</div>
                            <div className="pt-9">
                                <Post />
                            </div>
                        </div>
                        <div className="pt-2.5">
                            <div className="text-xl">Popular</div>
                            <div className="pt-9">
                                <Post />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
