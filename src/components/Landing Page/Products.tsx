import { Link } from "react-router-dom";

import ProductCardRgba from "./ProductCard";
import SectionTitle from "./SectionTitle";

export default function Products() {
    return (
        <>
            <div className="flex flex-row my-28 h-fit">
                <SectionTitle title={"Products"} linkTo={"/dashboard/product"} variant="one-button" />
            </div>
            <div className="grid w-full grid-cols-4 auto-cols-max mx-auto place-items-center place-self-center gap-5">
                <ProductCardRgba />
            </div>
        </>
    );
}
