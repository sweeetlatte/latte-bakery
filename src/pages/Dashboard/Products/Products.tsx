import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./products.css";

import Header from "../../../components/Dashboard/Header";
import SearchBar from "../../../components/SearchBar";
import ProductCard from "../../../components/Dashboard/ProductCard";
import ProductCardHorizontal from "../../../components/Dashboard/ProductCardHorizontal";
import AddCard from "../../../components/Modal/Add Card/AddCard";
import Icons from "../../../components/Icons";
import CustomSelectBox from "../../../components/CustomSelectBox";

import slider1 from "../../../assets/images/dashboard/slider-1.png";
import slider2 from "../../../assets/images/dashboard/slider-2.png";
import slider3 from "../../../assets/images/dashboard/slider-3.png";

export default function Products() {
    const [open, setOpenModal] = useState<boolean>(false);
    const [slider, setSlider] = useState<string>("hidden");

    const openModalAddProduct = () => {
        setOpenModal(true);
    };

    const closeModalAddProduct = () => {
        setOpenModal(false);
    };

    // var slideIndex = 1;
    // showDivs(slideIndex);

    // function currentDiv(n: number) {
    //     showDivs((slideIndex = n));
    // }

    function showDivs() {
        var i: number;
        var sliders = document.getElementsByClassName("slider");
        var dots = document.getElementsByClassName("demo");

        for (i = 0; i < sliders.length; i++) {
            setTimeout(() => {
                // sliders[i].classList += " block";
            }, 3000);
        }
        console.log(sliders[0]);
        //
        //     for (i = 0; i < sliders.length; i++) {
        //         sliders[i].style.display = "none";
        //     }
        //     for (i = 0; i < dots.length; i++) {
        //         dots[i].className = dots[i].className.replace(" w3-white", "");
        //     }
        //     sliders[slideIndex - 1].style.display = "block";
        //     dots[slideIndex - 1].className += " w3-white";
    }

    useEffect(() => showDivs(), []);
    // get element ra
    // setSlider("block") cho id nào được click

    const sorting = [
        { value: "price low to high", label: "Price: low to high" },
        { value: "price high to low", label: "Price: high to low" },
    ];

    return (
        <>
            <div
                className="w-full pl-40 text-white py-9 pr-16 flex items-center"
                style={{ backgroundColor: "#272727" }}
            >
                <div className="basis-9/12">
                    <div className="text-2xl font-semibold pb-1">Dashboard</div>
                    <div className="text-sm">Tuesday, 27 Jun 2022</div>
                </div>
                <div className="basis-3/12">
                    <Header />
                </div>
            </div>
            <div className="ml-40 text-white flex pr-16 py-6 space-x-[42px]">
                <div className="bg-light text-white basis-9/12">
                    <div className="flex pb-8 w-3/5">
                        <SearchBar />
                        <Link to="search">
                            <button className="border border-primary bg-primary px-8 py-3 ml-6 rounded-md w-fit">
                                Search
                            </button>
                        </Link>
                    </div>
                    <div className="relative pb-9 w-full">
                        {/* <img
                            className={`${slider} slider w-full object-cover`}
                            src={slider1}
                            alt="slider 1"
                        /> */}
                        <img
                            className={` slider w-full object-cover`}
                            src={slider2}
                            alt="slider 2"
                        />
                        {/* <img
                            className={`${slider} slider w-full object-cover`}
                            src={slider3}
                            alt="slider 3"
                        /> */}
                        <div className="flex space-x-3 w-full justify-center pt-4">
                            <div
                                className="dot"
                                onClick={() => {
                                    // setSlider("block");
                                }}
                            ></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-between">
                        <div className="flex space-x-12 relative text-base">
                            <div className="cursor-pointer underline decoration-primary underline-offset-[15px]">
                                Sweet Pastry
                            </div>
                            <div className="cursor-pointer">Red Velvet</div>
                            <div className="cursor-pointer">Mousse</div>
                            <div className="cursor-pointer">Biscuit</div>
                            <div className="cursor-pointer">Ice cream</div>
                            <Icons.ChevronRight stroke="white" />
                        </div>
                        <div className="basis-3/12">
                            <CustomSelectBox
                                data={sorting}
                                placeholder={"Default sorting"}
                                width={"100%"}
                                borderColor={"#F3A446"}
                                listBorderColor={"#F3A446"}
                            />
                        </div>
                    </div>

                    <div className="pt-8 w-full">
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                    </div>
                    <AddCard
                        open={open}
                        closeModalAddProduct={() => closeModalAddProduct()}
                    />
                </div>
                <div className="text-white basis-3/12">
                    <div>
                        <div className="text-lg pb-6">New products</div>
                        <div className="flex flex-col space-y-4">
                            <ProductCardHorizontal
                                openModalAddProduct={openModalAddProduct}
                            />
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="text-lg pb-6">Best sellers</div>
                        <div className="flex flex-col space-y-4">
                            <ProductCardHorizontal
                                openModalAddProduct={openModalAddProduct}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
