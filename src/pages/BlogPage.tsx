import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Icons from "../components/Icons";
import Blog from "../components/Blog/Blog";
import Post from "../components/Blog/Post";

export default function BlogPage() {
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
                    <SearchBar />
                    <div className="flex pl-9">
                        <div className="border w-48 border-white rounded py-3.5 px-3.5">
                            <div className="flex justify-between items-center">
                                <div>Select month</div>
                                <Icons.BiggerChevronDown stroke="white" />
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
                            <div className="flex justify-between items-center">
                                <div>Select year</div>
                                <Icons.BiggerChevronDown stroke="white" />
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
                            <div className="text-primary cursor-pointer">
                                Breads and rolls
                            </div>
                            <div className="cursor-pointer">Cheesecake</div>
                            <div className="cursor-pointer">Caramel</div>
                            <div className="cursor-pointer">Dairy free</div>
                            <div className="cursor-pointer">Peanut butter</div>
                            <div className="cursor-pointer">Cookies</div>
                        </div>
                        <div className="pt-24 px-14">
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
