import { Link } from "react-router-dom";
import close from "../../../assets/images/check-circle.png";

interface Props {
    open: boolean;
}

export default function RegisterSuccessfully({ open }: Props) {
    return (
        <>
            <div className={open ? "__mask-modal" : "hidden"} />
            <div
                className={
                    open
                        ? "flex flex-col __bg-add-product-modal w-[480px] top-[19.5rem] left-[30rem]"
                        : "hidden"
                }
            >
                <img
                    width={"48px"}
                    height={"48px"}
                    className="mx-auto"
                    src={close}
                    alt="delete product"
                />
                <div className="text-xl font-bold pt-4 text-primary text-center mx-auto relative">
                    Register Successfully!
                </div>
                <Link to="/login">
                    <button className="border w-full border-primary bg-primary px-5 py-2.5 mt-10 rounded-md">
                        Log in
                    </button>
                </Link>
            </div>
        </>
    );
}
