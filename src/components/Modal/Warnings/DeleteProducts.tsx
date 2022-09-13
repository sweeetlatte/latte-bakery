import close from "../../../assets/images/off_outline_close.png";
import x from "../../../assets/icons/x.svg";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { removeProduct } from "../../../redux/actions";

interface Props {
    open: boolean;
    closeModalWarningDelete: () => void;
    selectedProduct: number | undefined;
}

export default function DeleteProducts({
    open,
    closeModalWarningDelete,
    selectedProduct,
}: Props) {
    const dispatch = useAppDispatch();
    const productData = useAppSelector((state) => state.cart.items);

    return productData ? (
        <>
            {productData
                .filter((item) => item.id === selectedProduct)
                .map((product, index) => (
                    <div
                        className={
                            open
                                ? "__mask-modal z-20 flex justify-center items-center"
                                : "hidden"
                        }
                        style={
                            {
                                "--opacity": 1,
                                "--z": 20,
                            } as React.CSSProperties
                        }
                        key={index}
                    >
                        <div
                            className={
                                open
                                    ? "__mask-modal __mask-modal-dark"
                                    : "hidden"
                            }
                            style={
                                {
                                    "--opacity": 0.6,
                                    "--z": 20,
                                } as React.CSSProperties
                            }
                            onClick={closeModalWarningDelete}
                        />
                        <div className="z-30 fixed h-max w-max p-10">
                            <div
                                className={
                                    open
                                        ? "flex flex-col sm:w-max p-10 sm:p-6 rounded-xl bg-light border border-white border-solid"
                                        : "hidden"
                                }
                            >
                                <div className="flex items-start pb-6">
                                    <div className="text-xl lg:text-lg md:text-base sm:text-sm text-center mx-auto relative">
                                        Delete <span>{product.name}</span>?
                                    </div>
                                    <img
                                        onClick={closeModalWarningDelete}
                                        className="cursor-pointer absolute right-[50px] top-[50px]"
                                        src={x}
                                        alt="x"
                                    />
                                </div>
                                <div className="w-[100px] sm:w-12 h-[100px] sm:h-12 mx-auto">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={close}
                                        alt="delete product"
                                    />
                                </div>
                                <div className="flex flex-row justify-center pt-10 space-x-14 sm:space-x-7">
                                    <button
                                        className="border border-error bg-error px-8 py-1.5 rounded-md w-fit"
                                        onClick={() => {
                                            dispatch(
                                                removeProduct(selectedProduct)
                                            );
                                            closeModalWarningDelete();
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="border border-error text-error px-6 py-1.5 rounded-md w-fit"
                                        onClick={closeModalWarningDelete}
                                    >
                                        Cancel
                                    </button>
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
