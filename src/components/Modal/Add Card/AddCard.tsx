import "./addCard.css";
import { IProduct } from "../../../types";

import creme from "../../../assets/images/creme.png";
import x from "../../../assets/icons/x.svg";

interface Props {
    open: boolean;
    selectedProduct: IProduct | undefined;
    closeModalAddProduct: () => void;
}

export default function AddCard({
    open,
    selectedProduct,
    closeModalAddProduct,
}: Props) {
    return selectedProduct ? (
        <>
            <div
                className={
                    open
                        ? "__mask-modal flex justify-center items-center"
                        : "hidden"
                }
                style={{ "--opacity": 1, "--z": 20 } as React.CSSProperties}
            >
                <div
                    className={
                        open ? "__mask-modal __mask-modal-dark" : "hidden"
                    }
                    style={
                        { "--opacity": 0.6, "--z": 25 } as React.CSSProperties
                    }
                    onClick={closeModalAddProduct}
                />
                <div className="z-30 flex flex-col __bg-add-product-modal">
                    <div className="flex space-x-5">
                        <div className="basis-5/12 w-[17.5rem] lg:w-[12.95rem] h-[17.5rem] lg:h-[12.95rem]">
                            <img
                                className="w-full h-full object-cover rounded-lg"
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                            />
                            <div className="hidden lg:block mt-3">
                                <div className="text-xl text-primary font-medium">
                                    {selectedProduct.name}
                                </div>
                                <p>
                                    {new Intl.NumberFormat("de-DE", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(selectedProduct.price)}
                                </p>
                            </div>
                        </div>
                        <div className="basis-7/12 flex flex-col">
                            <div className="flex w-full relative ">
                                <div className="lg:hidden text-xl text-primary font-medium">
                                    {selectedProduct.name}
                                </div>
                                <img
                                    onClick={closeModalAddProduct}
                                    className="absolute right-[-14px] top-[-14px] cursor-pointer"
                                    src={x}
                                    alt="x"
                                />
                            </div>
                            <p className="lg:hidden">
                                {new Intl.NumberFormat("de-DE", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(selectedProduct.price)}
                            </p>
                            <p className="pt-4 lg:pt-0 text-sm">Size</p>
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
                                <button className="__filling bg-dark-bg h-[103px] lg:w-[127px]">
                                    Butter
                                    <img
                                        className="h-[60px] w-full object-cover pt-1"
                                        src={creme}
                                        alt="creme"
                                    />
                                </button>
                                <button className="__filling bg-dark-bg h-[103px] lg:w-[127px]">
                                    Chocolate
                                    <img
                                        className="h-[60px] w-full object-cover pt-1"
                                        src={creme}
                                        alt="creme"
                                    />
                                </button>
                                <button className="__filling bg-dark-bg h-[103px] lg:w-[127px]">
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
                    <div className="flex flex-row justify-end pt-9 lg:pt-3">
                        <button
                            onClick={closeModalAddProduct}
                            className="outlined-button ml-6 w-fit"
                        >
                            Cancel
                        </button>
                        <button className="filled-button ml-6 w-fit">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}
