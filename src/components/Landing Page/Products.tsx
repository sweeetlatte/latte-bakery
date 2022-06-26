import { Link } from "react-router-dom";

import ProductCardRgba from "./ProductCard";
import SectionTitle from "./SectionTitle";

export default function Products() {
    return (
        <>
            <div className="flex flex-row my-28 justify-between items-end h-fit">
                <SectionTitle />
                {/* <Link to="dashboard/product"> */}
                <div className="h-full">
                    <button className="regular-button mb-[33.33%]">
                        View all
                    </button>
                </div>
                {/* </Link> */}
            </div>
            <div className="grid w-full grid-cols-4 auto-cols-max mx-auto place-items-center place-self-center gap-5">
                <ProductCardRgba />
            </div>
        </>
    );
}
