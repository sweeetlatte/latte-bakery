import { Link } from "react-router-dom";

export default function ChangePassword() {
    return (
        <>
            <div className="settings-title">Change password</div>
            <form className="settings-form">
                <label
                    className="settings-form__label"
                    htmlFor="currentPassword"
                >
                    <span className="settings-form__span">
                        Current password
                    </span>
                    <input
                        className="settings-form__input"
                        type="password"
                        id="uname"
                        name="uname"
                    />
                </label>
                <label className="settings-form__label" htmlFor="newPassword">
                    <span className="settings-form__span">New password</span>
                    <input
                        className="settings-form__input"
                        type="password"
                        id="phone"
                        name="phone"
                    />
                </label>
                <label
                    className="settings-form__label"
                    htmlFor="confirmPassword"
                >
                    <span className="settings-form__span">
                        Confirm password
                    </span>
                    <input
                        className="settings-form__input"
                        type="password"
                        id="email"
                        name="email"
                    />
                </label>
                <div className="text-primary pt-1 pb-6 sm:pb-2 text-right">
                    <Link to="/forgot-password">Forgot password?</Link>
                </div>
                <button className="filled-button">Update</button>
            </form>
        </>
    );
}
