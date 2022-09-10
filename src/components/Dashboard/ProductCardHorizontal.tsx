import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../types";
import { fetchProductData } from "../../app/api";

import cartIcon from "../../assets/icons/cart.svg";
import { randomNumber } from "../../utils/functions";

interface Props {
    openModalAddProduct: () => void;
    selectProduct: (product: IProduct) => void;
}

export default function ProductCardHorizontal({
    openModalAddProduct,
    selectProduct,
}: Props) {
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
            {randomNumber(productData, 3).map((productItem, index) => (
                <div
                    key={index}
                    className="bg-dark-bg p-4 sm:p-5 rounded-lg flex xl:flex-col space-x-4 xl:space-x-0 justify-start w-full xl:w-[180px] lg:w-[150px] sm:w-[126px] xl:h-[245px] sm:h-[251px]"
                >
                    <Link
                        className="h-[100px] w-[100px] xl:h-[117px] sm:h-[86px] xl:w-full"
                        to="/dashboard/detail"
                        state={{ detail: productItem }}
                    >
                        <img
                            className="h-full w-full object-cover"
                            src={productItem.image}
                            alt={productItem.name}
                        />
                    </Link>
                    <div className="text-sm h-full overflow-hidden xl:flex xl:h-fit xl:items-end sm:flex-col sm:items-start">
                        <section className="xl:basis-1/2">
                            <Link
                                to="/dashboard/detail"
                                title={productItem.name}
                                state={{ detail: productItem }}
                                className="font-medium text-primary text-overflow w-[145px] xl:w-full xl:pt-4"
                                style={{ WebkitLineClamp: 1 }}
                            >
                                {productItem.name}
                            </Link>
                            <div className="pt-1 xl:pt-4">
                                {new Intl.NumberFormat("de-DE", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(productItem.price)}
                            </div>
                        </section>
                        <section className="xl:basis-1/2 lg:flex lg:justify-end sm:w-full">
                            <button
                                className="sm:hidden border border-primary bg-primary pl-2 pr-2.5 py-1 mt-5 h-max rounded-md flex items-center lg:text-[0px] sm:text-xs sm:w-full"
                                onClick={() => {
                                    openModalAddProduct();
                                    selectProduct(productItem);
                                }}
                            >
                                <img
                                    className="lg:mr-0 xl:mr-1 sm:mr-3"
                                    src={cartIcon}
                                    alt="cart icon"
                                />
                                Add
                            </button>
                            <Link
                                to="/dashboard/detail"
                                state={{ detail: productItem }}
                                className="hidden sm:block w-full h-max mt-5 lg:text-[0px] sm:text-xs"
                            >
                                <button className="w-full sm:flex items-center border border-primary bg-primary pl-2 pr-2.5 py-1 rounded-md">
                                    <img
                                        className="lg:mr-0 xl:mr-1 sm:mr-3"
                                        src={cartIcon}
                                        alt="cart icon"
                                    />
                                    Add
                                </button>
                            </Link>
                        </section>
                    </div>
                </div>
            ))}
        </>
    ) : (
        <></>
    );
}
