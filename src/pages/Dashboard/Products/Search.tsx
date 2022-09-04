import { Link } from "react-router-dom";

import "./products.css";

import CustomSelectBox from "../../../components/CustomSelectBox";
import Header from "../../../components/Dashboard/Header";
import SearchBar from "../../../components/SearchBar";
import ProductCard from "../../../components/Dashboard/ProductCard";
import { useState } from "react";
import Icons from "../../../components/Icons";

type NavBarResponsive = "100%" | "0";

export default function Search() {
    const sorting = [
        { value: "price low to high", label: "Price: low to high" },
        { value: "price high to low", label: "Price: high to low" },
    ];

    const [open, setOpenModal] = useState<boolean>(false);

    const openModalAddProduct = () => {
        setOpenModal(true);
    };

    const closeModalAddProduct = () => {
        setOpenModal(false);
    };

    const [widthofNavBarResponsive, setWidthofNavBarResponsive] =
        useState<NavBarResponsive>("0");

    return (
        <>
            <div
                className="w-full pl-40 md:px-6 text-white py-9 pr-16 flex items-center"
                style={{ backgroundColor: "#272727" }}
            >
                <div
                    className="hidden md:block md:basis-1/12 sm:basis-5/12"
                    style={{ cursor: "pointer" }}
                    onClick={() => setWidthofNavBarResponsive("100%")}
                >
                    <Icons.Menu stroke="#F3A446" />
                </div>
                <div className="basis-9/12 2xl:basis-8/12 xl:basis-7/12 lg:basis-5/12 md:basis-7/12 sm:hidden">
                    <div className="text-2xl xl:text-xl lg:text-lg font-semibold pb-1">
                        Dashboard
                    </div>
                    <div className="text-sm xl:text-xs lg:text-[10px]">
                        Tuesday, 27 Jun 2022
                    </div>
                </div>
                <div className="basis-3/12 2xl:basis-4/12 xl:basis-5/12 lg:basis-7/12 md:basis-4/12 sm:basis-7/12">
                    <Header />
                </div>
            </div>
            <div className="ml-40 md:ml-0 text-white pr-16 py-6 md:p-6 flex sm:flex-col justify-between space-x-10 md:space-x-7 sm:space-x-0 xl:text-sm lg:text-xs">
                <div className="basis-1/5 h-fit bg-dark-bg rounded-lg px-6 py-3">
                    <div className="font-bold text-lg xl:text-base pt-1">
                        Filter
                    </div>
                    <div className="sm:flex sm:space-x-7 pt-4 sm:pb-3">
                        <div>
                            <div className="font-bold">Category</div>
                            <div className="space-y-4 pt-3 pb-6 sm:pb-0">
                                <label
                                    htmlFor="category1"
                                    className="filter-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="category1"
                                        name="category1"
                                        value="category1"
                                    />
                                    Sweet Pastry
                                    <span className="checkmark"></span>
                                </label>
                                <label
                                    htmlFor="category2"
                                    className="filter-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="category2"
                                        name="category2"
                                        value="category2"
                                    />
                                    Velvet
                                    <span className="checkmark"></span>
                                </label>
                                <label
                                    htmlFor="category3"
                                    className="filter-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="category3"
                                        name="category3"
                                        value="category3"
                                    />
                                    Mousse
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Promotion</div>
                            <div className="space-y-4 pt-3 pb-6">
                                <label
                                    htmlFor="promo1"
                                    className="filter-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="promo1"
                                        name="promo1"
                                        value="promo1"
                                    />
                                    On Sale
                                    <span className="checkmark"></span>
                                </label>
                                <label
                                    htmlFor="promo2"
                                    className="filter-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="promo2"
                                        name="promo2"
                                        value="promo2"
                                    />
                                    Freeship
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-4/5 space-y-7 sm:space-y-6 sm:pt-6">
                    <div className="flex sm:flex-col-reverse space-x-5 sm:space-x-0">
                        <div className="flex items-center space-x-3 w-[70%] sm:w-full">
                            <SearchBar />
                            <button className="border border-primary bg-primary px-8 sm:px-4 py-3 ml-6 rounded-md w-fit">
                                Search
                            </button>
                        </div>
                        <div className="w-[30%] sm:w-full sm:pb-4">
                            <CustomSelectBox
                                data={sorting}
                                placeholder={"Default sorting"}
                                width={"100%"}
                                borderColor={"#F3A446"}
                                listBorderColor={"#F3A446"}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:px-2 md:px-0">
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                            quantityOnRow={3}
                        />
                    </div>
                </div>
            </div>
            <div
                id="mySidenav"
                className="sidenav hover:text-primary"
                style={{ width: widthofNavBarResponsive }}
            >
                <a
                    href="javascript:void(0)"
                    className="closebtn"
                    onClick={() => setWidthofNavBarResponsive("0")}
                >
                    &times;
                </a>
                <Link
                    style={{ color: "#F3A446" }}
                    to="/"
                    className="text-lg font-semibold font-brand mb-14"
                >
                    BAKERY
                </Link>
                <Link to="/dashboard/product">Product</Link>
                <Link to="/dashboard/cart">Cart</Link>
                <Link to="/dashboard/setting/account-info">Setting</Link>
                <Link style={{ color: "rgb(185 28 28)" }} to="/">
                    Logout
                </Link>
            </div>
        </>
    );
}
