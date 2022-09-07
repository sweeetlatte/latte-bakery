import { useEffect, useState } from "react";

import { fetchProductData } from "../../app/api";
import { IProduct } from "../../types";
import { randomNumber } from "../../utils/functions";
import Loader from "../Loader";

export default function ProductInCheckout() {
    const [productData, setProductData] = useState<IProduct[]>();

    useEffect(() => {
        (async () => {
            const responseData = await fetchProductData();

            if (responseData) {
                setProductData(
                    randomNumber(
                        responseData,
                        Math.floor(Math.random() * 10) + 1
                    )
                );
            }
        })();
    }, []);

    return productData ? (
        <>
            {productData.map((productItem, index) => (
                <div
                    key={index}
                    className="flex space-x-5 text-sm items-center pt-4"
                    style={{
                        borderBottom:
                            index !== productData.length - 1
                                ? "1px solid #656870"
                                : "",
                        paddingBottom:
                            index !== productData.length - 1 ? "16px" : "",
                    }}
                >
                    <div className="basis-2/12 h-[65px]">
                        <img
                            className="w-full h-full object-cover"
                            src={productItem.image}
                            alt={productItem.name}
                        />
                    </div>
                    <div className="basis-10/12 flex justify-between items-center">
                        <div className="space-y-1">
                            <div className="text-primary pb-1">
                                {productItem.name}
                            </div>
                            <div className="text-xs">Filling: Chocolate</div>
                            <div className="text-xs">Size: M</div>
                            <div className="text-xs">Quantity: 1</div>
                        </div>
                        <div className="md:text-xs">
                            {new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "VND",
                            }).format(productItem.price)}
                        </div>
                    </div>
                </div>
            ))}
        </>
    ) : (
        <Loader />
    );
}
