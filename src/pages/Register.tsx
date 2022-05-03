import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";

import login from "../assets/images/login.png";
import facebook from "../assets/images/Facebook.png";
import google from "../assets/images/Google.png";
import { useForm } from "../utils/hooks/useForm";
import RegisterSuccessfully from "../components/Modal/RegisterSuccessfully";

export default function Register() {
    const [open, setOpenModal] = useState<boolean>(false);

    const openModalLoginNotify = () => {
        setOpenModal(true);
    };

    const { handleSubmit, handleChange, data, errors } = useForm({
        validations: {
            name: {
                required: {
                    value: true,
                    message: "This field is required",
                },
                pattern: {
                    value: "^[A-Za-z]*$",
                    message: "Username does not include special characters.",
                },
            },
            email: {
                required: {
                    value: true,
                    message: "This field is required",
                },
                pattern: {
                    value: "^[0-9|A-Za-z]+@[A-Za-z]+[.][A-Za-z].*$",
                    message:
                        "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'",
                },
            },
            password: {
                required: {
                    value: true,
                    message: "This field is required",
                },
                custom: {
                    isValid: (value) => value?.length > 7,
                    message: "The password needs to be at least 8 characters.",
                },
            },
        },
    });

    return (
        <div className="text-white bg-dark-bg">
            <img className="object-cover absolute" src={login} alt="login" />
            <div className="relative h-max px-48 py-20 rounded-l-3xl bg-light ml-[24.5rem]">
                <Link
                    to="/"
                    className="text-primary text-4xl font-semibold font-brand"
                >
                    Bakery
                </Link>
                <div className="pt-12 text-4xl font-semibold">Register</div>
                <div className="pt-14 flex space-x-9">
                    <div className="flex basis-1/2 space-x-4 items-center border rounded-lg px-4 py-4">
                        <img src={google} alt="google" />
                        <div>Continue with Google</div>
                    </div>
                    <div className="flex basis-1/2 space-x-4 items-center border rounded-lg px-4 py-4">
                        <img src={facebook} alt="facebook" />
                        <div>Continue with Facebook</div>
                    </div>
                </div>
                <div className="pt-14 pb-14 text-center">- OR -</div>
                <form className="mb-16" noValidate>
                    <label htmlFor="uname">
                        <span className="block mb-2">Username</span>
                        <input
                            className="w-full bg-light py-3.5 px-3 focus:border-primary focus:outline-none"
                            style={{ borderBottom: "1px solid white" }}
                            type="text"
                            id="uname"
                            name="uname"
                            onChange={handleChange("name")}
                        />
                        {errors.name && (
                            <p className="error mt-2 text-error">
                                {errors.name}
                            </p>
                        )}
                    </label>
                    <label htmlFor="email">
                        <span className="block mt-14 mb-2">Email</span>
                        <input
                            className="w-full bg-light py-3.5 px-3 focus:border-primary focus:outline-none disabled:bg-light"
                            style={{ borderBottom: "1px solid white" }}
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange("email")}
                        />
                        {errors.email && (
                            <p className="error mt-2 text-error">
                                {errors.email}
                            </p>
                        )}
                    </label>
                    <label htmlFor="password">
                        <span className="block mt-14 mb-2">Password</span>
                        <input
                            className="w-full bg-light py-3.5 px-3 focus:border-primary focus:outline-none disabled:bg-light"
                            style={{ borderBottom: "1px solid white" }}
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange("password")}
                        />
                        {errors.password && (
                            <p className="error mt-2 text-error">
                                {errors.password}
                            </p>
                        )}
                    </label>
                    <button
                        className="border w-full border-primary bg-primary px-5 py-2.5 mt-20 rounded-md"
                        onClick={(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
                            e.preventDefault();
                            handleSubmit(e);
                            !errors && openModalLoginNotify();
                        }}
                    >
                        Register
                    </button>
                </form>
                <div className="">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary">
                        Log in
                    </Link>
                </div>
                <RegisterSuccessfully open={open} />
            </div>
        </div>
    );
}
