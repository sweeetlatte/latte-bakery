import { Link } from "react-router-dom";

interface Props {
    executeAboutUsScroll?: () => void;
    executeProductsScroll?: () => void;
    executeBlogScroll?: () => void;
    executeGetInTouchScroll?: () => void;
}

export default function Navbar({
    executeAboutUsScroll,
    executeProductsScroll,
    executeBlogScroll,
    executeGetInTouchScroll,
}: Props) {
    return (
        <div
            className="pl-24 pr-20 flex items-center py-5 "
            style={{
                backgroundImage: "linear-gradient(#1D1E1E, rgba(29,30,30,0))",
            }}
        >
            <div className="flex basis-4/12 justify-between text-sm">
                <Link to="/" onClick={() => executeAboutUsScroll && executeAboutUsScroll()}>
                    About us
                </Link>
                <div onClick={() => executeProductsScroll && executeProductsScroll()}>Products</div>
                <Link to="/" onClick={() => executeBlogScroll && executeBlogScroll()}>Blog</Link>
                <div onClick={() => executeGetInTouchScroll && executeGetInTouchScroll()}>Contact</div>
            </div>
            <Link
                to="/"
                className="basis-4/12 text-primary text-3xl font-semibold font-brand"
            >
                BAKERY
            </Link>
            <div className="flex basis-4/12 space-x-6 justify-end text-sm">
                <Link
                    to="/login"
                    className="border border-primary text-primary px-5 py-2.5 rounded-md"
                >
                    Log in
                </Link>
                <Link
                    to="/register"
                    className="border border-primary bg-primary px-5 py-2.5 rounded-md"
                >
                    Register
                </Link>
            </div>
        </div>
    );
}
