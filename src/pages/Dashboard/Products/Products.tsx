import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./products.css";

import Header from "../../../components/Dashboard/Header";
import SearchBar from "../../../components/SearchBar";
import ProductCard from "../../../components/Dashboard/ProductCard";
import ProductCardHorizontal from "../../../components/Dashboard/ProductCardHorizontal";
import AddCard from "../../../components/Modal/Add Card/AddCard";
import Icons from "../../../components/Icons";
import CustomSelectBox from "../../../components/CustomSelectBox";

// import slider1 from "../../../assets/images/dashboard/slider-1.png";
import slider2 from "../../../assets/images/dashboard/slider-2.png";
// import slider3 from "../../../assets/images/dashboard/slider-3.png";

export default function Products() {
    const [open, setOpenModal] = useState<boolean>(false);
    // const [slider, setSlider] = useState<string>("hidden");

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
        // var dots = document.getElementsByClassName("demo");

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

    const [type, setType] = useState<string>("Sweet Pastry");

    var element = document.getElementsByClassName(
        "active-product-tab"
    ) as HTMLCollectionOf<HTMLElement>;

    const [offsetWidth, setWidth] = useState<string>("");
    const [offsetLeft, setLeft] = useState<string>("");

    useEffect(() => {
        if (element) {
            setWidth(`${element[0].offsetWidth}px`);
            setLeft(`${element[0].offsetLeft}px`);
        }
    }, [element, type]);

    var tab = document.getElementsByClassName(
        "tab-bar"
    ) as HTMLCollectionOf<HTMLElement>;

    const [showRightArrow, setShowRightArrow] = useState<boolean>(true);
    const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);

    function slideRight() {
        if (tab) {
            var maxScrollLeft = tab[0].scrollWidth - tab[0].clientWidth;
            tab[0].scrollLeft += maxScrollLeft / 3;
            if (tab[0].scrollLeft > 0 && maxScrollLeft - tab[0].scrollLeft > 1)
                setShowLeftArrow(true);
            else if (maxScrollLeft - tab[0].scrollLeft <= 1)
                setShowRightArrow(false);
        }
    }

    function slideLeft() {
        if (tab) {
            var maxScrollLeft = tab[0].scrollWidth - tab[0].clientWidth;
            tab[0].scrollLeft -= maxScrollLeft / 3;
            if (tab[0].scrollLeft > 0 && maxScrollLeft - tab[0].scrollLeft > 1)
                setShowRightArrow(true);
            else if (tab[0].scrollLeft === 0) setShowLeftArrow(false);
        }
    }

    return (
        <>
            <Header header={"Dashboard"} />
            <div className="dashboard-container flex xl:flex-col xl:items-start xl:space-y-[20px] space-x-[42px] xl:space-x-[0]">
                <div className="bg-light text-white basis-9/12 lg:basis-7/12 xl:w-full">
                    <div className="flex pb-8">
                        <SearchBar />
                        <Link to="search">
                            <button className="border border-primary bg-primary px-8 sm:px-4 py-3 ml-6 rounded-md w-fit">
                                Search
                            </button>
                        </Link>
                    </div>
                    <div className="relative pb-9 sm:pb-3 w-full">
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
                    <div className="relative flex md:flex-col md:items-stretch items-center justify-between w-full md:overflow-hidden">
                        <div className="basis-9/12 tab-bar border-t-0 border-b-0">
                            <div
                                className="line"
                                style={{
                                    width: offsetWidth,
                                    left: offsetLeft,
                                }}
                            ></div>
                            <div className="flex items-center text-center space-x-12 md:space-x-0 md:justify-between sm:space-x-9">
                                <div
                                    className={
                                        type === "Sweet Pastry"
                                            ? "cursor-pointer active-product-tab"
                                            : "cursor-pointer"
                                    }
                                    onClick={() => setType("Sweet Pastry")}
                                >
                                    Sweet Pastry
                                </div>
                                <div
                                    className={
                                        type === "Velvet"
                                            ? "cursor-pointer active-product-tab"
                                            : "cursor-pointer"
                                    }
                                    onClick={() => setType("Velvet")}
                                >
                                    Velvet
                                </div>
                                <div
                                    className={
                                        type === "Mousse"
                                            ? "cursor-pointer active-product-tab"
                                            : "cursor-pointer"
                                    }
                                    onClick={() => setType("Mousse")}
                                >
                                    Mousse
                                </div>
                                <div
                                    className={
                                        type === "Biscuit"
                                            ? "cursor-pointer active-product-tab"
                                            : "cursor-pointer"
                                    }
                                    onClick={() => setType("Biscuit")}
                                >
                                    Biscuit
                                </div>
                                <div
                                    className={
                                        type === "Ice cream"
                                            ? "cursor-pointer active-product-tab"
                                            : "cursor-pointer"
                                    }
                                    onClick={() => setType("Ice cream")}
                                >
                                    Ice Cream
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                showLeftArrow === true
                                    ? "hidden sm:absolute sm:flex justify-start items-center left-0 top-px w-12 h-[5.5rem]"
                                    : "hidden"
                            }
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, rgba(50,50,50,1), rgba(50,50,50,1), rgba(50,50,50,1), rgba(50,50,50,0))",
                            }}
                            onClick={() => slideLeft()}
                        >
                            <Icons.ChevronLeft />
                        </div>
                        <div
                            className={
                                showRightArrow === true
                                    ? "hidden sm:absolute sm:flex justify-end items-center right-0 top-px w-12 h-[5.5rem]"
                                    : "hidden"
                            }
                            style={{
                                backgroundImage:
                                    "linear-gradient(to left, rgba(50,50,50,1), rgba(50,50,50,1), rgba(50,50,50,1), rgba(50,50,50,0))",
                            }}
                            onClick={() => slideRight()}
                        >
                            <Icons.ChevronRight />
                        </div>
                        <div className="basis-3/12 md:pt-6">
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
                            type={type}
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                    </div>
                    <AddCard
                        open={open}
                        closeModalAddProduct={() => closeModalAddProduct()}
                    />
                </div>
                <div className="text-white basis-3/12 lg:basis-5/12 xl:w-full xl:pt-12 sm:pt-7">
                    <div>
                        <div className="text-lg pb-6">New products</div>
                        <div className="flex flex-col space-y-4 xl:space-y-0 xl:grid xl:w-full xl:grid-cols-4 sm:grid-cols-2 xl:auto-cols-max xl:mx-auto xl:place-items-center xl:place-self-center xl:gap-5">
                            <ProductCardHorizontal
                                openModalAddProduct={openModalAddProduct}
                            />
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="text-lg pb-6">Best sellers</div>
                        <div className="flex flex-col space-y-4 xl:space-y-0 xl:grid xl:w-full xl:grid-cols-4 sm:grid-cols-2 xl:auto-cols-max xl:mx-auto xl:place-items-center xl:place-self-center xl:gap-5">
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
