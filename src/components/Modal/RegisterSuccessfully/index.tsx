import React from "react";
import { Link } from "react-router-dom";
import close from "../../../assets/images/check-circle.png";

interface Props {
    open: boolean;
}

export default function RegisterSuccessfully({ open }: Props) {
    return (
        <>
            <div
                className={open ? "__mask-modal __mask-modal-dark" : "hidden"}
                style={{ "--opacity": 0.6, "--z": 19 } as React.CSSProperties}
            />
            {open && (
                <div
                    className="flex justify-center items-center __mask-modal"
                    style={{ "--z": 20 } as React.CSSProperties}
                >
                    <div
                        className={
                            open
                                ? "flex flex-col __bg-add-product-modal w-[480px] sm:w-max mx-auto mb-auto"
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
                        <div className="text-xl lg:text-lg md:text-base font-bold pt-4 text-primary text-center mx-auto relative">
                            Register Successfully!
                        </div>
                        <Link to="/login">
                            <button className="filled-button w-full mt-10">
                                Log in
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
