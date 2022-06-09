import { Link } from "react-router-dom";

import "./products.css";

import CustomSelectBox from "../../../components/CustomSelectBox";
import Header from "../../../components/Dashboard/Header";
import SearchBar from "../../../components/SearchBar";
import ProductCard from "../../../components/Dashboard/ProductCard";
import { useState } from "react";

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
            <div className="ml-40 text-white pr-16 py-6 flex justify-between space-x-12">
                <div className="basis-1/5 h-fit bg-dark-bg rounded-lg px-6 py-3">
                    <div className="font-bold text-lg pt-1">Filter</div>
                    <div className="font-bold pt-4">Category</div>
                    <div className="space-y-4 pt-3 pb-6">
                        <label htmlFor="category1" className="filter-checkbox">
                            <input
                                type="checkbox"
                                id="category1"
                                name="category1"
                                value="category1"
                            />
                            Sweet Pastry
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="category2" className="filter-checkbox">
                            <input
                                type="checkbox"
                                id="category2"
                                name="category2"
                                value="category2"
                            />
                            Velvet
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="category3" className="filter-checkbox">
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
                    <div className="font-bold">Promotion</div>
                    <div className="space-y-4 pt-3 pb-6">
                        <label htmlFor="promo1" className="filter-checkbox">
                            <input
                                type="checkbox"
                                id="promo1"
                                name="promo1"
                                value="promo1"
                            />
                            On Sale
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="promo2" className="filter-checkbox">
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
                <div className="basis-4/5 space-y-9">
                    <div className="flex space-x-3">
                        <div className="flex space-x-5 w-4/5">
                            <SearchBar />
                            <Link to="search">
                                <button className="border border-primary bg-primary px-8 py-3 mr-6 rounded-md w-fit">
                                    Search
                                </button>
                            </Link>
                        </div>
                        <div className="w-1/5">
                            <CustomSelectBox
                                data={sorting}
                                placeholder={"Default sorting"}
                                width={"100%"}
                                borderColor={"#F3A446"}
                                listBorderColor={"#F3A446"}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <ProductCard
                            openModalAddProduct={() => openModalAddProduct()}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
