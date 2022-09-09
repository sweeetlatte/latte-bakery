import close from "../../../assets/images/off_outline_close.png";
import x from "../../../assets/icons/x.svg";

interface Props {
    open: boolean;
    closeModalWarningDelete: () => void;
}

export default function DeleteProducts({
    open,
    closeModalWarningDelete,
}: Props) {
    return (
        <>
            <div
                className={
                    open
                        ? "__mask-modal z-20 flex justify-center items-center"
                        : "hidden"
                }
            >
                <div
                    className={
                        open ? "__mask-modal __mask-modal-dark" : "hidden"
                    }
                    style={
                        { "--opacity": 0.6, "--z": 20 } as React.CSSProperties
                    }
                    onClick={closeModalWarningDelete}
                />
                <div className="z-30 flex flex-col fixed h-max w-max p-10">
                    <div
                        className={
                            open
                                ? "sm:hidden fixed w-[45%] p-10 rounded-xl opacity-100 bg-[#0C0D0D] border border-white border-solid -rotate-3 h-[310px]"
                                : "hidden"
                        }
                    ></div>
                    <div
                        className={
                            open
                                ? "flex flex-col sm:w-max p-10 sm:p-6 rounded-xl bg-light border border-white border-solid rotate-1 sm:rotate-0"
                                : "hidden"
                        }
                    >
                        <div className="flex items-start pb-6">
                            <div className="text-xl lg:text-lg md:text-base sm:text-sm text-center mx-auto relative">
                                Delete (1) product?
                            </div>
                            <img
                                onClick={closeModalWarningDelete}
                                className="cursor-pointer absolute right-[18px] top-[18px]"
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
                                className="border border-error text-error px-6 py-1.5 rounded-md w-fit"
                                onClick={closeModalWarningDelete}
                            >
                                Cancel
                            </button>
                            <button
                                className="border border-error bg-error px-8 py-1.5 rounded-md w-fit"
                                onClick={closeModalWarningDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
