import ProductCardRgba from "./ProductCard";
import SectionTitle from "./SectionTitle";

export default function Products() {
    return (
        <>
            <div className="flex flex-row mt-28 xl:mt-20 h-fit">
                <SectionTitle
                    title={"Products"}
                    linkTo={"/dashboard/product"}
                    variant="one-button"
                />
            </div>
            <div className="grid w-full grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 auto-cols-max mx-auto place-items-center place-self-center gap-5 sm:gap-0">
                <ProductCardRgba />
            </div>
        </>
    );
}
