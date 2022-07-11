import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../types";
import { fetchProductData } from "../../app/api";

import cartIcon from "../../assets/icons/cart.svg";

interface Props {
    openModalAddProduct: () => void;
    type?: string;
}

export default function ProductCard({ openModalAddProduct, type }: Props) {
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
        <div className="grid w-full grid-cols-4 auto-cols-max mx-auto place-items-center place-self-center gap-5">
            {productData
                .filter((item: IProduct) => item.type === type)
                .map((productItem) => (
                    <div className="w-[204px] h-[245px] px-6 py-5 bg-dark-bg rounded-lg text-left text-sm">
                        <Link
                            to="/dashboard/detail"
                            state={{ detail: productItem }}
                        >
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
                                state={{ detail: productItem }}
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
