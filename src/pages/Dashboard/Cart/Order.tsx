import "./../dashboard.css";

import ProductCard from "../../../components/Dashboard/ProductCard";

import bike from "../../../assets/icons/bike.svg";
import map from "../../../assets/icons/Map.png";
import { useState } from "react";
import AddCard from "../../../components/Modal/Add Card/AddCard";
import { IProduct } from "../../../types";

export default function Order() {
    const [open, setOpenModal] = useState<boolean>(false);
    // const [slider, setSlider] = useState<string>("hidden");
    const [selectedProduct, setSelectedProduct] = useState<
        IProduct | undefined
    >();

    const openModalAddProduct = () => {
        setOpenModal(true);
    };

    const closeModalAddProduct = () => {
        setOpenModal(false);
    };

    const selectProduct = (product: IProduct) => {
        setSelectedProduct(product);
    };

    const removeProduct = (product: IProduct) => {
        setSelectedProduct(product);
    };

    return (
        <>
            <div className="flex sm:flex-col items-center bg-dark-bg w-max sm:w-full mx-auto mb-8">
                <div className="px-16 pt-8 pb-3 text-center text-primary">
                    <img src={bike} alt="bike" />
                    <p className="text-lg md:text-base">On the way</p>
                </div>
                <div className="relative">
                    <img src={map} alt="map" />
                    <div className="flex justify-between bg-dark-bg absolute bottom-0 w-full px-6 py-3 text-xs">
                        <div className="text-center space-y-1">
                            <p>Estimated arrival</p>
                            <p className="text-primary">20:10 - 20:30</p>
                        </div>
                        <div className="text-center space-y-1">
                            <p>Rider</p>
                            <p className="text-primary">Bryan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-4">Suggested Products</div>
            <div className="md:hidden">
                <ProductCard
                    openModalAddProduct={openModalAddProduct}
                    quantity={5}
                    variant={"row"}
                    selectProduct={selectProduct}
                />
            </div>
            <div className="hidden md:block">
                <ProductCard
                    openModalAddProduct={openModalAddProduct}
                    quantity={4}
                    selectProduct={selectProduct}
                />
            </div>
            <AddCard
                open={open}
                closeModalAddProduct={closeModalAddProduct}
                selectedProduct={selectedProduct}
            />
        </>
    );
}
