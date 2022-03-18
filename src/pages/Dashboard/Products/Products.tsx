import React, { useState } from "react";

import SearchBar from "../../../components/SearchBar";
import ProductCard from "../../../components/Dashboard/ProductCard";
import ProductCardHorizontal from "../../../components/Dashboard/ProductCardHorizontal";
import AddCard from "../../../components/Modal/Add Card/AddCard";

import arrowDown from "../../../assets/icons/arrow-down.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import ava from "../../../assets/images/blog/detail/detail-1.png";
import slider1 from "../../../assets/images/dashboard/slider-1.png";

export default function Products() {
    const [open, setOpenModal] = useState<boolean>(false);

    const openModalAddProduct = () => {
        setOpenModal(true);
    };

    return (
        <>
            <div
                className="w-full pl-40 text-white py-9 pr-16 flex items-center"
                style={{ backgroundColor: "#272727" }}
            >
                <div className="basis-9/12">
                    <div className="text-2xl font-semibold pb-1">Dashboard</div>
                    <div className="text-sm">Tuesday, 2 Nov 2021</div>
                </div>
                <div className="flex items-center basis-3/12">
                    <div className="border border-primary rounded py-1 px-3.5 mr-8 flex items-center">
                        EN
                        <img
                            className="w-[11px] ml-2"
                            src={arrowDown}
                            alt="arrow down"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            className="w-14 h-14 object-cover rounded-full"
                            src={ava}
                            alt="ava"
                        />
                        <p>Latte</p>
                    </div>
                </div>
            </div>
            <div className="ml-40 text-white flex pr-16 py-6 space-x-[42px]">
                <div className="bg-light text-white basis-9/12">
                    <div className="flex pb-8">
                        <SearchBar />
                        <button className="border border-primary bg-primary px-8 py-3 ml-6 rounded-md w-fit">
                            Search
                        </button>
                    </div>
                    <div className="relative pb-16">
                        <img
                            className="w-full object-cover"
                            src={slider1}
                            alt="slider 1"
                        />
                        <div className="absolute"></div>
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
                            <img src={arrowRight} alt="arrow right" />
                        </div>
                        <div className="flex items-center space-x-4 border border-primary rounded py-3 px-6">
                            <div>Default sorting</div>
                            <img src={arrowDown} alt="arrow down" />
                        </div>
                    </div>
                    <div className="pt-8 flex w-full justify-between">
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                    </div>
                    <div className="pt-8 flex w-full justify-between">
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                    </div>
                </div>
                <AddCard open={open} />
                <div className="bg-light text-white basis-3/12">
                    <div>
                        <div className="text-lg pb-6">New products</div>
                        <div className="flex flex-col space-y-4">
                            <ProductCardHorizontal />
                            <ProductCardHorizontal />
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="text-lg pb-6">Best sellers</div>
                        <div className="flex flex-col space-y-4">
                            <ProductCardHorizontal />
                            <ProductCardHorizontal />
                            <ProductCardHorizontal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
