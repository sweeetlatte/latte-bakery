import React from "react";

import Navbar from "../components/Navbar";
import search from "../assets/icons/search.svg";
import arrDown from "../assets/icons/arrow-down.svg";

export default function BlogPage() {
    return (
        <div className="font-body text-center mx-auto bg-light text-white">
            <Navbar />
            <div className="pt-10 pl-28 pr-5 text-left">
                <div className="text-lg">Home / Blog</div>
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
                <div className="flex justify-between">
                    <div>left</div>
                    <div>right</div>
                </div>
            </div>
        </div>
    );
}
