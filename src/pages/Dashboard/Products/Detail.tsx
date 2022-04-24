import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./products.css";

import ProductCardHorizontal from "../../../components/Dashboard/ProductCardHorizontal";
import Review from "../../../components/Dashboard/Review";
import Pagination from "../../../components/Dashboard/Pagination/Pagination";

import creme from "../../../assets/images/creme.png";
import cake from "../../../assets/images/blog-2.png";

import arrowLeft from "../../../assets/icons/arrow-left.svg";
import Header from "../../../components/Dashboard/Header";
import AddCard from "../../../components/Modal/Add Card/AddCard";

export default function Detail() {
    const [open, setOpenModal] = useState<boolean>(false);

    const openModalAddProduct = () => {
        setOpenModal(true);
    };

    const closeModalAddProduct = () => {
        setOpenModal(false);
    };

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
            <div className="ml-40 text-white flex pr-16 pb-6 pt-14 space-x-[42px]">
                <div
                    className="basis-9/12 pr-12"
                    style={{ borderRight: "1px solid white" }}
                >
                    <div className="flex space-x-[27.5px] text-lg">
                        <img src={arrowLeft} alt="arrow left" />
                        <div>
                            <Link to="/dashboard">Dashboard</Link>
                            &nbsp;/&nbsp;
                            <Link
                                to="/dashboard/detail"
                                className="text-primary"
                            >
                                Meringue Tart
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col bg-dark-bg rounded-xl p-8 mt-5">
                        <div className="flex flex-row w-full space-x-9">
                            <div className="basis-6/12">
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src={cake}
                                    alt="cake"
                                />
                            </div>
                            <div className="basis-6/12 flex flex-col">
                                <div className="text-primary font-medium">
                                    Meringue Tart
                                </div>
                                <p className="text-xl">
                                    80.000 VND • 5 🤎🤎🤎🤎🤎
                                </p>
                                <p className="pt-6 text-sm">Size</p>
                                <div className="text-sm text-primary pt-3 flex space-x-3">
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
                                <div className="text-sm text-primary pt-3 flex space-x-3">
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
                                <div className="flex flex-row pt-6">
                                    <button className="border border-primary text-primary px-6 py-1.5 rounded-md w-fit">
                                        Add to cart
                                    </button>
                                    <button className="font-medium border border-primary bg-primary px-8 py-1.5 ml-[0.85rem] rounded-md w-fit">
                                        Buy now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-dark-bg rounded-xl p-8 mt-5">
                        <div className="text-xl font-medium pb-3 text-primary">
                            Description
                        </div>
                        <p>
                            Fruit desserts covered with baked meringue were
                            found beginning in the 18th century in France.
                            Menon's pommes meringuées are a sort of thick apple
                            sauce or apple butter covered with baked meringue in
                            his 1739 cookbook.
                        </p>
                    </div>
                    <div className="flex flex-col bg-dark-bg rounded-xl p-8 mt-5">
                        <div className="text-xl font-medium pb-3 text-primary">
                            Reviews
                        </div>
                        <div className="flex space-x-8">
                            <div className="flex flex-col items-center">
                                <p className="text-7xl pb-3">🤎</p>
                                <p>5.0 of 5.0</p>
                            </div>
                            <div className="flex flex-wrap space-x-4">
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] h-max">
                                    All
                                </button>
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] h-max">
                                    5 🤎
                                </button>
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] h-max">
                                    4 🤎
                                </button>
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] h-max">
                                    3 🤎
                                </button>
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] h-max">
                                    2 🤎
                                </button>
                                <button className="__yellow-outline-option py-2 px-4 w-[86px] h-max">
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
                <div className="basis-3/12">
                    <div className="text-lg pb-6">You may like</div>
                    <div className="flex flex-col space-y-4">
                        <ProductCardHorizontal
                            openModalAddProduct={openModalAddProduct}
                        />
                        <ProductCardHorizontal
                            openModalAddProduct={openModalAddProduct}
                        />
                    </div>
                </div>
                <AddCard
                    open={open}
                    closeModalAddProduct={() => closeModalAddProduct()}
                />
            </div>
        </>
    );
}
