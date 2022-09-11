import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./../dashboard.css";
import "./products.css";
import { IProduct, IProductDetail } from "../../../types";
import { fetchProductData } from "../../../app/api";

import ProductCardHorizontal from "../../../components/Dashboard/ProductCardHorizontal";
import Review from "../../../components/Dashboard/Review";
import Pagination from "../../../components/Dashboard/Pagination/Pagination";
import Header from "../../../components/Dashboard/Header";
import AddCard from "../../../components/Modal/Add Card/AddCard";
import Icons from "../../../components/Icons";

import creme from "../../../assets/images/creme.png";
import Loader from "../../../components/Loader";

export default function Detail() {
    const location = useLocation();
    const state = (location.state as IProductDetail) || {
        from: { pathname: "/" },
    };
    const productDetail = state?.detail ?? null;
    // console.log(state.detail);

    const [productData, setProductData] = useState<IProduct[]>();
    useEffect(() => {
        (async () => {
            const responseData = await fetchProductData();

            if (responseData) {
                setProductData(responseData);
            }
        })();
    }, []);

    return productData ? (
        <>
            <Header header="Dashboard" />
            <div className="dashboard-container flex lg:flex-col space-x-[42px] lg:space-x-0 lg:space-y-9">
                <div className="basis-9/12 xl:basis-10/12 pr-12 lg:pr-0 border-right lg:border-r-0">
                    <div className="flex space-x-[27.5px] text-lg lg:text-base items-center">
                        <Link to="/dashboard/product">
                            <Icons.ArrowLeft />
                        </Link>
                        <div>
                            <Link to="/dashboard/product">Dashboard</Link>
                            &nbsp;/&nbsp;
                            <Link
                                to="/dashboard/detail"
                                className="text-primary"
                            >
                                {productDetail.name}
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col bg-dark-bg rounded-xl p-8 mt-5">
                        <div className="flex xl:flex-col w-full space-x-9 xl:space-x-0 xl:space-y-6">
                            <div className="basis-6/12">
                                <img
                                    className="w-full h-[355px] lg:h-[180px] object-cover rounded-lg"
                                    src={productDetail.image}
                                    alt="cake"
                                />
                            </div>
                            <div className="basis-6/12 flex flex-col">
                                <div className="sm:text-base text-primary font-medium">
                                    {productDetail.name}
                                </div>
                                <p className="text-xl sm:text-xs">
                                    {new Intl.NumberFormat("de-DE", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(productDetail.price)}{" "}
                                    • 5 🤎🤎🤎🤎🤎
                                </p>
                                <p className="pt-6 text-sm">Size</p>
                                <div className="text-sm sm:text-xs text-primary pt-3 flex space-x-3">
                                    <button className="__yellow-outline-option py-1 px-4 w-max">
                                        Size S
                                    </button>
                                    <button className="__yellow-outline-option py-1 px-4 w-max">
                                        Size M
                                    </button>
                                    <button className="__yellow-outline-option py-1 px-4 w-max">
                                        Size L
                                    </button>
                                </div>
                                <p className="pt-4 text-sm">Filling</p>
                                <div className="text-sm text-primary pt-3 flex sm:flex-col space-x-3 sm:space-x-0 sm:space-y-3 lg:justify-between">
                                    <button className="__filling bg-light h-[103px]">
                                        Butter
                                        <img
                                            className="h-[60px] w-full object-cover pt-1"
                                            src={creme}
                                            alt="creme"
                                        />
                                    </button>
                                    <button className="__filling bg-light">
                                        Chocolate
                                        <img
                                            className="h-[60px] w-full object-cover pt-1"
                                            src={creme}
                                            alt="creme"
                                        />
                                    </button>
                                    <button className="__filling bg-light">
                                        Crème
                                        <img
                                            className="h-[60px] w-full object-cover pt-1"
                                            src={creme}
                                            alt="creme"
                                        />
                                    </button>
                                </div>
                                <div className="flex pt-6">
                                    <button className="lg:basis-1/2 outlined-button w-fit">
                                        Add to cart
                                    </button>
                                    <button className="lg:basis-1/2 font-medium filled-button ml-[0.85rem] w-fit">
                                        Buy now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-dark-bg rounded-xl p-8 mt-5">
                        <div className="text-xl sm:text-sm font-medium pb-3 text-primary">
                            Description
                        </div>
                        <p>{productDetail.description}</p>
                    </div>
                    <div className="flex flex-col bg-dark-bg rounded-xl p-8 mt-5">
                        <div className="text-xl sm:text-sm font-medium pb-3 text-primary">
                            Reviews
                        </div>
                        <div className="flex sm:flex-col sm:space-y-3 space-x-8 sm:space-x-0 xl:space-x-6 xl:items-center">
                            <div className="flex flex-col items-center">
                                <p className="text-7xl pb-3">🤎</p>
                                <p>5.0 of 5.0</p>
                            </div>
                            <div className="flex flex-wrap space-x-4 xl:space-x-0 xl:grid xl:grid-cols-3 xl:gap-3 sm:place-items-center">
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] sm:w-[66px] h-max">
                                    All
                                </button>
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] sm:w-[66px] h-max">
                                    5 🤎
                                </button>
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] sm:w-[66px] h-max">
                                    4 🤎
                                </button>
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] sm:w-[66px] h-max">
                                    3 🤎
                                </button>
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] sm:w-[66px] h-max">
                                    2 🤎
                                </button>
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] sm:w-[66px] h-max">
                                    1 🤎
                                </button>
                            </div>
                        </div>
                        <div className="py-9 flex flex-col space-y-5">
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                        </div>
                        <div className="w-full flex justify-center pt-6">
                            <Pagination />
                        </div>
                    </div>
                </div>
                <div className="basis-3/12 xl:basis-2/12">
                    <div className="text-lg lg:text-base pb-6 lg:pb-5">
                        You may like
                    </div>
                    <div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-4 sm:grid-cols-2 md:gap-5">
                        <ProductCardHorizontal />
                        <ProductCardHorizontal />
                    </div>
                    <AddCard />
                </div>
            </div>
        </>
    ) : (
        <Loader />
    );
}
