import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import cartIcon from "../../assets/icons/cart.svg";
import { IProduct } from "../../types";
import { fetchProductData } from "../../app/api";

interface Props {
    openModalAddProduct: () => void;
}

export default function ProductCard({ openModalAddProduct }: Props) {
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
        <div 
        // className="grid w-full grid-cols-4 auto-cols-max mx-auto place-items-center place-self-center gap-5"
        className="flex flex-wrap justify-center"
        >
            {productData.map((productItem) => (
                <div className="w-[204px] h-[245px] px-6 py-5 m-6 bg-dark-bg rounded-lg text-left text-sm flex-initial">
                    <Link to="/dashboard/detail">
                        <img
                            className="h-[117px] w-full object-cover"
                            src={productItem.image}
                            alt="cake"
                        />
                    </Link>
                    <div className="pt-4">
                        {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "VND",
                        }).format(productItem.price)}
                    </div>
                    <div className="flex justify-between items-center pt-2">
                        <Link
                            to="/dashboard/detail"
                            className="font-medium text-primary text-overflow w-[85px]"
                            style={{ WebkitLineClamp: 2 }}
                        >
                            {productItem.name}
                        </Link>
                        <button
                            onClick={openModalAddProduct}
                            className="border border-primary bg-primary pl-2 pr-2.5 py-1 h-max rounded-md flex items-center"
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
        </div>
    ) : (
        <></>
    );
}
