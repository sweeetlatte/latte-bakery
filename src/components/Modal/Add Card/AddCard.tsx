import React from "react";

import "./addCard.css";

import cake from "../../../assets/images/blog-2.png";
import creme from "../../../assets/images/creme.png";
import x from "../../../assets/icons/x.svg";

interface Props {
    open: boolean;
    closeModalAddProduct: () => void;
}

export default function AddCard({ open, closeModalAddProduct }: Props) {
    return (
        <>
            <div
                className={open ? "__mask-modal" : "hidden"}
                onClick={closeModalAddProduct}
            />
            <div
                className={
                    open ? "flex flex-col __bg-add-product-modal" : "hidden"
                }
            >
                <div className="flex flex-row w-full">
                    <div className="basis-5/12">
                        <img
                            className="w-[17.5rem] h-[17.5rem] object-cover rounded-lg"
                            src={cake}
                            alt="cake"
                        />
                    </div>
                    <div className="basis-7/12 flex flex-col">
                        <div className="flex w-full relative ">
                            <div className="text-primary font-medium">
                                Meringue Tart
                            </div>
                            <img
                                onClick={closeModalAddProduct}
                                className="absolute right-[-14px] top-[-14px]"
                                src={x}
                                alt="x"
                            />
                        </div>
                        <p className="text-xl">80.000 VND</p>
                        <p className="pt-4 text-sm">Size</p>
                        <div className="text-sm text-primary pt-3 flex space-x-3">
                            <button className="__yellow-outline-option py-1 px-4 w-max">
                                Size S
                            </button>
                            <button className="__yellow-outline-option py-1 px-4 w-max">
                                Size M
                            </button>
                            <button className="__yellow-outline-option py-1 px-4 w-max">
                                Size L
                            </button>
                        </div>
                        <p className="pt-4 text-sm">Filling</p>
                        <div className="text-sm text-primary pt-3 flex space-x-3">
                            <button className="__filling bg-dark-bg h-[103px]">
                                Butter
                                <img
                                    className="h-[60px] w-full object-cover pt-1"
                                    src={creme}
                                    alt="creme"
                                />
                            </button>
                            <button className="__filling bg-dark-bg">
                                Chocolate
                                <img
                                    className="h-[60px] w-full object-cover pt-1"
                                    src={creme}
                                    alt="creme"
                                />
                            </button>
                            <button className="__filling bg-dark-bg">
                                Crème
                                <img
                                    className="h-[60px] w-full object-cover pt-1"
                                    src={creme}
                                    alt="creme"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end pt-9">
                    <button
                        onClick={closeModalAddProduct}
                        className="border border-primary text-primary px-6 py-1.5 ml-6 rounded-md w-fit"
                    >
                        Cancel
                    </button>
                    <button className="border border-primary bg-primary px-8 py-1.5 ml-6 rounded-md w-fit">
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
}
