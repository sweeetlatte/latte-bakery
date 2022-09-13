import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

import "../../pages/Dashboard/Cart/cart.css";
import Icons from "../Icons";

import circleChevronDown from "../../assets/icons/circle_chevron_down.svg";

interface Props {
    openModalWarningDelete: () => void;
    checkAll: boolean;
    selectProduct: (product: number) => void;
}

export default function ProductInCart({
    openModalWarningDelete,
    checkAll,
    selectProduct,
}: Props) {
    const cartData = useAppSelector((state) => state.cart.items);
    const [quantity, setQuantity] = useState<number>(
        Math.floor(Math.random() * 10) + 1
    );

    function minusQuantity() {
        quantity > 1 && setQuantity(quantity - 1);
    }
    function plusQuantity() {
        quantity < 10 && setQuantity(quantity + 1);
    }

    return cartData ? (
        <>
            {cartData.map((cartItem, index) => (
                <div
                    key={index}
                    className={
                        index === 0
                            ? "bg-dark-bg relative rounded-t-lg"
                            : index === cartData.length - 1
                            ? "bg-dark-bg relative rounded-b-lg"
                            : "bg-dark-bg relative"
                    }
                >
                    <label
                        htmlFor={cartItem.name}
                        className="cart-custom-checkbox"
                    >
                        <input
                            type="checkbox"
                            id={cartItem.name}
                            name={cartItem.name}
                            value={cartItem.id}
                            checked={checkAll === true ? true : false}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <div className="text-lg py-7 sm:py-5 pl-20 md:pl-[4.5rem] sm:pl-[3.75rem] pr-5 flex sm:flex-col justify-between items-center sm:items-start">
                        <div className="basis-5/12 flex space-x-[27px] md:space-x-5 items-center sm:items-start md:text-xs">
                            <Link
                                to="/dashboard/detail"
                                state={{ detail: cartItem }}
                            >
                                <div className="w-[132px] sm:w-[50px] h-[86px] sm:h-[50px]">
                                    <img
                                        className="w-full h-full object-cover rounded-lg"
                                        src={cartItem.image}
                                        alt={cartItem.name}
                                    />
                                </div>
                            </Link>
                            <div className="sm:space-y-2">
                                <div className="text-primary xl:text-base sm:text-sm">
                                    <Link
                                        to="/dashboard/detail"
                                        className="text-overflow"
                                        style={{ WebkitLineClamp: 2 }}
                                        title={cartItem.name}
                                        state={{ detail: cartItem }}
                                    >
                                        {cartItem.name}
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
                                                cartItem.quantity > 1
                                                    ? ""
                                                    : "cursor-default"
                                            }
                                        >
                                            <Icons.Minus
                                                stroke={
                                                    cartItem.quantity > 1
                                                        ? "#F3A446"
                                                        : "#BEBEBE"
                                                }
                                            />
                                        </button>
                                        <p>{cartItem.quantity}</p>
                                        <button
                                            onClick={plusQuantity}
                                            className={
                                                cartItem.quantity < 10
                                                    ? ""
                                                    : "cursor-default"
                                            }
                                        >
                                            <Icons.Plus
                                                stroke={
                                                    cartItem.quantity < 10
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
                                        }).format(cartItem.price)}
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
                                        cartItem.quantity > 1
                                            ? ""
                                            : "cursor-default"
                                    }
                                >
                                    <Icons.Minus
                                        stroke={
                                            cartItem.quantity > 1
                                                ? "#F3A446"
                                                : "#BEBEBE"
                                        }
                                    />
                                </button>
                                <p>{cartItem.quantity}</p>
                                <button
                                    onClick={plusQuantity}
                                    className={
                                        cartItem.quantity < 10
                                            ? ""
                                            : "cursor-default"
                                    }
                                >
                                    <Icons.Plus
                                        stroke={
                                            cartItem.quantity < 10
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
                                }).format(cartItem.price)}
                            </div>
                            <div className="basis-3/12 pt-1">
                                {new Intl.NumberFormat("de-DE", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(cartItem.price * cartItem.quantity)}
                            </div>
                        </div>
                        <div className="basis-1/12 justify-end flex sm:absolute sm:right-[10px] sm:top-[18px]">
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    openModalWarningDelete();
                                    selectProduct(cartItem.id);
                                }}
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
