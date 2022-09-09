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
                <div key={index} className={`bg-dark-bg ${rounded} relative`}>
                    <label htmlFor="item1" className="cart-custom-checkbox">
                        <input
                            type="checkbox"
                            id="item1"
                            name="item1"
                            value="item1"
                        />
                        <span className="checkmark"></span>
                    </label>
                    <div className="text-lg py-7 sm:py-5 pl-20 md:pl-[4.5rem] sm:pl-[3.75rem] pr-5 flex sm:flex-col justify-between items-center sm:items-start">
                        <div className="basis-5/12 flex space-x-[27px] md:space-x-5 items-center sm:items-start md:text-xs">
                            <Link
                                to="/dashboard/detail"
                                state={{ detail: productItem }}
                            >
                                <div className="w-[132px] sm:w-[50px] h-[86px] sm:h-[50px]">
                                    <img
                                        className="w-full h-full object-cover rounded-lg"
                                        src={productItem.image}
                                        alt={productItem.name}
                                    />
                                </div>
                            </Link>
                            <div className="sm:space-y-2">
                                <div className="text-primary xl:text-base sm:text-sm">
                                    <Link
                                        to="/dashboard/detail"
                                        className="text-overflow"
                                        style={{ WebkitLineClamp: 2 }}
                                        title={productItem.name}
                                        state={{ detail: productItem }}
                                    >
                                        {productItem.name}
                                    </Link>
                                </div>
                                <div className="text-sm xl:text-xs">
                                    Filling: Chocolate
                                </div>
                                <div className="hidden sm:block space-y-2">
                                    <div className="flex justify-start items-center space-x-3">
                                        <p>Size</p> <p>M</p>
                                        <img
                                            src={circleChevronDown}
                                            alt="circle chevron down"
                                        />
                                    </div>
                                    <div className="flex justify-start items-center space-x-3">
                                        <button
                                            onClick={minusQuantity}
                                            className={
                                                quantity > 1
                                                    ? ""
                                                    : "cursor-default"
                                            }
                                        >
                                            <Icons.Minus
                                                stroke={
                                                    quantity > 1
                                                        ? "#F3A446"
                                                        : "#BEBEBE"
                                                }
                                            />
                                        </button>
                                        <p>{quantity}</p>
                                        <button
                                            onClick={plusQuantity}
                                            className={
                                                quantity < 10
                                                    ? ""
                                                    : "cursor-default"
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
                                    <div>
                                        {new Intl.NumberFormat("de-DE", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(productItem.price)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between basis-6/12 text-sm md:text-xs text-center sm:hidden">
                            <div className="basis-3/12 flex justify-center items-center space-x-3">
                                <p>M</p>
                                <img
                                    src={circleChevronDown}
                                    alt="circle chevron down"
                                />
                            </div>
                            <div className="basis-3/12 flex justify-center items-center space-x-3">
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
                            <div className="basis-3/12 pt-1 sm:pt-[3px]">
                                {new Intl.NumberFormat("de-DE", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(productItem.price)}
                            </div>
                            <div className="basis-3/12 pt-1">
                                {new Intl.NumberFormat("de-DE", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(productItem.price * quantity)}
                            </div>
                        </div>
                        <div className="basis-1/12 justify-end flex sm:absolute sm:right-[10px] sm:top-[15px]">
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
