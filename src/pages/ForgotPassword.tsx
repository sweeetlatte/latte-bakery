import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <div className="text-white bg-dark-bg h-screen login xl:text-sm sm:text-xs">
            <div className="flex flex-col h-full px-[11%] py-[6%] ml-[24%] sm:ml-0 rounded-l-3xl sm:rounded-none bg-light">
                <div className="basis-1/2">
                    <Link
                        to="/"
                        className="text-primary text-4xl lg:text-3xl md:text-2xl font-semibold font-brand"
                    >
                        Bakery
                    </Link>
                    <p className="text-2xl font-semibold text-primary pt-12 pb-3">
                        Forgot your password?&nbsp;
                    </p>
                    <p>Don't worry! We got your back!</p>
                </div>
                <form className="basis-1/2 flex flex-col items-center">
                    <label htmlFor="email" className="w-full">
                        <span className="block">Email</span>
                        <input
                            className="w-full bg-light py-3.5 px-3 focus:border-primary focus:outline-none"
                            style={{ borderBottom: "1px solid white" }}
                            type="email"
                            id="email"
                            name="email"
                        />
                    </label>
                    <div className="space-x-10 sm:space-x-0 sm:flex sm:flex-col-reverse sm:w-full">
                        <Link to="/login">
                            <button className="outlined-button mt-10 sm:mt-6 sm:w-full">
                                Back to log in
                            </button>
                        </Link>
                        <button className="filled-button mt-10 sm:mt-14">
                            Send request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
