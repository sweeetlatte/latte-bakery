import close from "../../../assets/images/off_outline_close.png";
import x from "../../../assets/icons/x.svg";

interface Props {
    open: boolean;
    closeModalWarningDelete: () => void;
}

export default function DeleteProducts({ open, closeModalWarningDelete }: Props) {
    return (
        <>
            <div
                className={open ? "__mask-modal" : "hidden"}
                onClick={closeModalWarningDelete}
            />
            <div
                className={
                    open
                        ? "__bg-add-product-modal bg-[#0C0D0D] border border-white border-solid -rotate-3 h-[310px]"
                        : "hidden"
                }
            ></div>
            <div
                className={
                    open
                        ? "flex flex-col __bg-add-product-modal border border-white border-solid rotate-1"
                        : "hidden"
                }
            >
                <div className={"flex items-start pb-6"}>
                    <div className="text-xl text-center mx-auto relative">
                        Delete (1) product?
                    </div>
                    <img
                        onClick={closeModalWarningDelete}
                        className="cursor-pointer absolute right-[18px] top-[18px]"
                        src={x}
                        alt="x"
                    />
                </div>
                <img
                    width={"100px"}
                    height={"100px"}
                    className="mx-auto"
                    src={close}
                    alt="delete product"
                />
                <div className="flex flex-row justify-center pt-10 space-x-14">
                    <button
                        className="border border-error text-error px-6 py-1.5 ml-6 rounded-md w-fit"
                        onClick={closeModalWarningDelete}
                    >
                        Cancel
                    </button>
                    <button
                        className="border border-error bg-error px-8 py-1.5 ml-6 rounded-md w-fit"
                        onClick={closeModalWarningDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
}
