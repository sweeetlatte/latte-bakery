import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { IProduct } from "../../types";
import { fetchProductData } from "../../app/api";
import { randomNumber } from "../../utils/functions";

import cartIcon from "../../assets/icons/cart.svg";

export default function ProductCardRgba() {
    const [productData, setProductData] = useState<IProduct[]>();

    useEffect(() => {
        (async () => {
            const responseData = await fetchProductData();

            if (responseData) {
                setProductData(randomNumber(responseData, 8));
            }
        })();
    }, []);

    return productData ? (
        <>
            {productData.map((productItem) => (
                <div className="bg-white-rgba w-[15.688rem] h-[15.563rem] rounded-lg px-[1.875rem] pt-[1.875rem] mb-12 text-left">
                    <img
                        className="w-[191px] h-[118px] object-cover"
                        src={productItem.image}
                        alt="banner"
                    />
                    <div className="pt-2.5 text-sm font-medium">
                        {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "VND",
                        }).format(productItem.price)}
                    </div>
                    <div className="flex justify-between items-center pt-1.5">
                        <div
                            className="font-medium text-primary text-overflow w-6/12"
                            style={{ WebkitLineClamp: 2 }}
                        >
                            {productItem.name}
                        </div>
                        <Link to="/login">
                            <button className="border border-primary bg-primary px-2.5 py-1 rounded-md flex items-center">
                                <img
                                    className="pr-1"
                                    src={cartIcon}
                                    alt="cart icon"
                                />
                                Add
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    ) : (
        <></>
    );
}
