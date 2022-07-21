import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../types";
import { fetchProductData } from "../../app/api";

import cartIcon from "../../assets/icons/cart.svg";
import { randomNumber } from "../../utils/functions";

interface Props {
    openModalAddProduct: () => void;
}

export default function ProductCardHorizontal({ openModalAddProduct }: Props) {
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
                    className="bg-dark-bg py-4 px-4 rounded-lg flex space-x-4 justify-between w-full"
                >
                    <Link
                        className="h-[100px] w-[100px]"
                        to="/dashboard/detail"
                        state={{ detail: productItem }}
                    >
                        <img
                            // className="h-[100px] w-[100px] object-cover"
                            className="h-full w-full object-cover"
                            src={productItem.image}
                            alt={productItem.name}
                        />
                    </Link>
                    <div className="text-sm h-full overflow-hidden">
                        <Link
                            to="/dashboard/detail"
                            state={{ detail: productItem }}
                            className="font-medium text-primary text-overflow w-[145px]"
                            style={{ WebkitLineClamp: 1 }}
                        >
                            {productItem.name}
                        </Link>
                        <div className="pt-1">
                            {new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "VND",
                            }).format(productItem.price)}
                        </div>
                        <button
                            className="border border-primary bg-primary pl-2 pr-2.5 py-1 mt-5 h-max rounded-md flex items-center"
                            onClick={openModalAddProduct}
                        >
                            <img
                                className="mr-1"
                                src={cartIcon}
                                alt="cart icon"
                            />
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </>
    ) : (
        <></>
    );
}
