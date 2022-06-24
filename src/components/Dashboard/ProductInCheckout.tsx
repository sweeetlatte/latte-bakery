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
                setProductData(responseData);
            }
        })();
    }, []);

    return productData ? (
        <>
            {randomNumber(productData, 5).map((productItem) => (
                <div
                    key={productItem.id}
                    className="flex text-sm items-center py-4"
                    style={{ borderBottom: "1px solid #656870" }}
                >
                    <img
                        className="w-[65px] h-[65px] object-cover"
                        src={productItem.image}
                        alt="cake"
                    />
                    <div className="w-full flex justify-between items-center px-5">
                        <div>
                            <div className="text-primary pb-1">
                                {productItem.name}
                            </div>
                            <div className="text-xs pb-[2px]">
                                Filling: Chocolate
                            </div>
                            <div className="text-xs">Quantity: 1</div>
                        </div>
                        <div>
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
