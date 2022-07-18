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
            {productData.map((productItem, index) => (
                <div
                    key={index}
                    className="bg-white-rgba w-[15.688rem] xl:w-[12.7rem] h-[15.563rem] xl:h-[14.563rem] rounded-lg px-[1.875rem] py-[1.875rem] mb-12 text-left flex flex-col justify-between"
                >
                    <img
                        className="w-full h-[118px] xl:h-[90px] object-cover"
                        src={productItem.image}
                        alt={productItem.name}
                    />
                    <div className="text-sm font-medium">
                        {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "VND",
                        }).format(productItem.price)}
                    </div>
                    <div className="flex justify-between items-center">
                        <div
                            className="basis-1/2 font-medium text-primary text-overflow"
                            style={{ WebkitLineClamp: 1 }}
                        >
                            {productItem.name}
                        </div>
                        <div className="basis-1/2 w-full px-auto">
                            <Link to="/login">
                                <button className="flex justify-center items-center border border-primary bg-primary w-full py-1 rounded-md ">
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
                </div>
            ))}
        </>
    ) : (
        <></>
    );
}
