import { useState } from "react";
import { Link } from "react-router-dom";

import "./../dashboard.css";
import { useAppSelector } from "../../../redux/store";

import Icons from "../../../components/Icons";
import ProductInCart from "../../../components/Dashboard/ProductInCart";
import DeleteProducts from "../../../components/Modal/Warnings/DeleteProducts";
import RemoveAll from "../../../components/Modal/Warnings/RemoveAll";

export default function ProductList() {
    const [open, setOpenModal] = useState<boolean>(false);
    const [checkAll, setcheckAll] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<
        number | undefined
    >();
    const cartItems = useAppSelector((state) => state.cart.items);
    const [openAll, setOpenAll] = useState<boolean>(false);

    const openModalWarningDelete = () => {
        setOpenModal(true);
    };

    const closeModalWarningDelete = () => {
        setOpenModal(false);
    };

    const openModalDeleteAll = () => {
        setOpenAll(true);
    };

    const closeModalDeleteAll = () => {
        setOpenAll(false);
    };

    const selectProduct = (product: number) => {
        setSelectedProduct(product);
    };

    return (
        <>
            <div className="bg-dark-bg w-full rounded-lg sm:hidden">
                <label htmlFor="checkall" className="cart-custom-checkbox">
                    <input
                        className="cart-checkbox"
                        type="checkbox"
                        id="checkall"
                        name="checkall"
                        value="checkall"
                        onChange={() => {
                            if (checkAll === true) {
                                setcheckAll(false);
                            } else setcheckAll(true);
                        }}
                    />
                    <span
                        className="checkmark"
                        style={{
                            top: "23px",
                        }}
                    ></span>
                </label>
                <div className="text-lg xl:text-base py-5 pl-20 flex justify-between pr-5 items-center">
                    <div className="basis-5/12">Products (3 items)</div>
                    <div className="flex justify-between basis-6/12 text-center">
                        <div className="basis-3/12">Size</div>
                        <div className="basis-3/12">Quantity</div>
                        <div className="basis-3/12">Price</div>
                        <div className="basis-3/12">Subtotal</div>
                    </div>
                    <div
                        className="basis-1/12 justify-end flex"
                        onClick={openModalDeleteAll}
                    >
                        <Icons.Trash stroke="#323232" />
                    </div>
                </div>
            </div>
            <header className="hidden sm:block text-base font-semibold">
                My Cart
            </header>
            <div className="flex flex-col space-y-1 pt-5">
                <ProductInCart
                    openModalWarningDelete={() => openModalWarningDelete()}
                    checkAll={checkAll}
                    selectProduct={selectProduct}
                />
            </div>
            <DeleteProducts
                open={open}
                closeModalWarningDelete={() => closeModalWarningDelete()}
                selectedProduct={selectedProduct}
            />
            <RemoveAll
                open={openAll}
                closeModalWarningDelete={closeModalDeleteAll}
            />
            <div className="flex flex-row justify-end sm:justify-between items-center pt-9">
                <div className="text-lg xl:text-base">Total: 0 VND</div>
                <Link
                    to={
                        cartItems.length > 0
                            ? "/dashboard/cart/shipping-information"
                            : "#"
                    }
                    className={
                        cartItems.length > 0
                            ? "filled-button ml-9"
                            : "filled-button bg-light cursor-default ml-9"
                    }
                >
                    Check out
                </Link>
            </div>
        </>
    );
}
