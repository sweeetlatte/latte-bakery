import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../pages/Dashboard/Cart/cart.css";

import { IProduct } from "../../types";
import { fetchProductData } from "../../app/api";
import { randomNumber } from "../../utils/functions";
import Icons from "../Icons";

import circleChevronDown from "../../assets/icons/circle_chevron_down.svg";

interface Props {
    rounded?: string;
    openModalWarningDelete: () => void;
}

export default function ProductInCart({
    rounded,
    openModalWarningDelete,
}: Props) {
    const [quantity, setQuantity] = useState<number>(
        Math.floor(Math.random() * 10) + 1
    );

    function minusQuantity() {
        quantity > 1 && setQuantity(quantity - 1);
    }

    function plusQuantity() {
        quantity < 10 && setQuantity(quantity + 1);
    }

    const [productData, setProductData] = useState<IProduct[]>();

    useEffect(() => {
        (async () => {
            const responseData = await fetchProductData();

            if (responseData) {
                setProductData(randomNumber(responseData, 1));
            }
        })();
    }, []);

    return productData ? (
        <>
            {productData.map((productItem, index) => (
                <div key={index} className={`bg-dark-bg ${rounded}`}>
                    <label htmlFor="item1" className="cart-custom-checkbox">
                        <input
                            type="checkbox"
                            id="item1"
                            name="item1"
                            value="item1"
                        />
                        <span
                            className="checkmark"
                            style={{ top: "58px" }}
                        ></span>
                    </label>
                    <div className="text-lg py-7 pl-20 pr-5 flex justify-between items-center">
                        <div className="basis-4/12 flex space-x-[27px] items-center">
                            <Link
                                to="/dashboard/detail"
                                state={{ detail: productItem }}
                            >
                                <img
                                    className="w-[132px] h-[86px] object-cover rounded-lg"
                                    src={productItem.image}
                                    alt={productItem.name}
                                />
                            </Link>

                            <div>
                                <div className="text-primary">
                                    <Link
                                        to="/dashboard/detail"
                                        state={{ detail: productItem }}
                                    >
                                        {productItem.name}
                                    </Link>
                                </div>
                                <div className="text-sm">
                                    Filling: Chocolate
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between basis-6/12 text-sm text-center">
                            <div className="basis-3/12 flex justify-center items-center space-x-3">
                                <p>M</p>
                                <img
                                    src={circleChevronDown}
                                    alt="circle chevron down"
                                />
                            </div>
                            <div className="basis-3/12 flex justify-center space-x-3">
                                <button
                                    onClick={minusQuantity}
                                    className={
                                        quantity > 1 ? "" : "cursor-default"
                                    }
                                >
                                    <Icons.Minus
                                        stroke={
                                            quantity > 1 ? "#F3A446" : "#BEBEBE"
                                        }
                                    />
                                </button>
                                <p>{quantity}</p>
                                <button
                                    onClick={plusQuantity}
                                    className={
                                        quantity < 10 ? "" : "cursor-default"
                                    }
                                >
                                    <Icons.Plus
                                        stroke={
                                            quantity < 10
                                                ? "#F3A446"
                                                : "#BEBEBE"
                                        }
                                    />
                                </button>
                            </div>
                            <div className="basis-3/12">
                                {new Intl.NumberFormat("de-DE", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(productItem.price)}
                            </div>
                            <div className="basis-3/12">
                                {new Intl.NumberFormat("de-DE", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(productItem.price * quantity)}
                            </div>
                        </div>
                        <div className="basis-1/12 justify-end flex">
                            <div
                                className="cursor-pointer"
                                onClick={openModalWarningDelete}
                            >
                                <Icons.Trash stroke="#f83b3b" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    ) : (
        <></>
    );
}
