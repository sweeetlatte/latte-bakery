import { Link } from "react-router-dom";

export default function ChangePassword() {
    return (
        <>
            <div className="font-bold text-lg lg:text-base">
                Change password
            </div>
            <form className="settings-form pt-10 sm:pt-6 space-y-4">
                <label
                    className="flex items-center mb-4"
                    htmlFor="currentPassword"
                >
                    <span className="w-[176px] sm:w-[100px]">
                        Current password
                    </span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="password"
                        id="uname"
                        name="uname"
                    />
                </label>
                <label className="flex items-center mb-4" htmlFor="newPassword">
                    <span className="w-[176px] sm:w-[100px]">New password</span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="password"
                        id="phone"
                        name="phone"
                    />
                </label>
                <label
                    className="flex items-center mb-4"
                    htmlFor="confirmPassword"
                >
                    <span className="w-[176px] sm:w-[100px]">
                        Confirm password
                    </span>
                    <input
                        className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
                        type="password"
                        id="email"
                        name="email"
                    />
                </label>
                <div className="text-primary pt-1 pb-6 sm:pb-2 text-right">
                    <Link to="/forgot-password">Forgot password?</Link>
                </div>
                <button className="border w-full border-primary bg-primary px-5 py-2.5 rounded-md">
                    Update
                </button>
            </form>
        </>
    );
}
