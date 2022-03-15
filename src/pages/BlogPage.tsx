import React from "react";
import { Link } from "react-router-dom";

import Blog from "../components/Blog/Blog";
import Post from "../components/Blog/Post";

import Navbar from "../components/Navbar";
import search from "../assets/icons/search.svg";
import arrDown from "../assets/icons/arrow-down.svg";

export default function BlogPage() {
    // Gán chuỗi document... cho $ và document... cho $$
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    // chọn tất cả những element có class là tab-item và tab-pane
    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    const tabActive = $(".tab-item.text-primary");
    const line = $(".line");

    console.log(line, tabActive);

    // line.style.left = tabActive.offsetLeft + "px";
    // line.style.width = tabActive.offsetWidth + "px";

    // tabs.forEach((tab, index) => {
    //     const pane = panes[index];

    //     tab.onClick = function () {
    //         $(".tab-item.active").classList.remove("active");
    //         $(".tab-pane.active").classList.remove("active");

    //         line.style.left = this.offsetLeft + "px";
    //         line.style.width = this.offsetWidth + "px";

    //         this.classList.add("active");
    //         pane.classList.add("active");
    //     };
    // });

    return (
        <div className="font-body text-center mx-auto bg-light text-white">
            <Navbar />
            <div className="pt-10 pl-28 pr-20 text-left">
                <div className="text-lg flex">
                    <Link to="/">Home</Link>
                    &nbsp;/&nbsp;
                    <Link to="/blog">Blog</Link>
                </div>
                <div className="pt-11 text-5xl">Blog</div>
                <div className="flex pt-14 pb-12">
                    <div className="flex bg-dark-bg border border-border rounded py-3.5 px-3.5 w-96">
                        <img src={search} alt="icon search" />
                        <input
                            className="bg-dark-bg pl-2"
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Type something..."
                        />
                    </div>
                    <div className="flex pl-9">
                        <div className=" border w-48 border-white rounded py-3.5 px-3.5">
                            <div className="flex justify-between">
                                <div>Select month</div>
                                <img src={arrDown} alt="arrow down" />
                            </div>
                            {/* <select>
                                <option value="0">Select month</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select> */}
                        </div>
                        <div className=" border w-48 border-white rounded py-3.5 px-3.5 ml-5">
                            <div className="flex justify-between">
                                <div>Select year</div>
                                <img src={arrDown} alt="arrow down" />
                            </div>
                            {/* <select>
                                <option value="0">Select month</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select> */}
                        </div>
                    </div>
                </div>
                <div className="flex space-x-9">
                    <div
                        className="pr-16 basis-9/12 mb-14"
                        style={{ borderRight: "1px solid white" }}
                    >
                        <div className="flex justify-between text-lg tab-bar py-7 px-3 relative">
                            <div className="tab-item text-primary cursor-pointer">
                                Breads and rolls
                            </div>
                            <div className="tab-item cursor-pointer">
                                Cheesecake
                            </div>
                            <div className="tab-item cursor-pointer">
                                Caramel
                            </div>
                            <div className="tab-item cursor-pointer">
                                Dairy free
                            </div>
                            <div className="tab-item cursor-pointer">
                                Peanut butter
                            </div>
                            <div className="tab-item cursor-pointer">
                                Cookies
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="pt-24 px-14 tab-pane active">
                            <div className="flex space-x-16 pb-14">
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                            </div>
                            <div className="flex space-x-16 pb-14">
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                            </div>
                            <div className="flex space-x-16 pb-14">
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                            </div>
                            <div className="flex space-x-16">
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                            </div>
                        </div>
                        <div className="pt-24 px-14 tab-pane">
                            <div className="flex space-x-16 pb-14">
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                            </div>
                            <div className="flex space-x-16 pb-14">
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                            </div>
                            <div className="flex space-x-16 pb-14">
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                            </div>
                            <div className="flex space-x-16">
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                                <div className="basis-1/2">
                                    <Blog />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/12">
                        <div>
                            <div className="text-xl">New post</div>
                            <div className="pt-9">
                                <Post />
                                <Post />
                                <Post />
                            </div>
                        </div>
                        <div className="pt-2.5">
                            <div className="text-xl">Popular</div>
                            <div className="pt-9">
                                <Post />
                                <Post />
                                <Post />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
