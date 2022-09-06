import { Link } from "react-router-dom";

import Header from "../../../components/Dashboard/Header";
import ProductCard from "../../../components/Dashboard/ProductCard";
import Icons from "../../../components/Icons";

import bike from "../../../assets/icons/bike.svg";
import map from "../../../assets/icons/Map.png";

export default function Order() {
    return (
        <>
            <Header header="Order" />
            <div className="ml-40 text-white pr-16 py-6">
                <div className="flex space-x-[27.5px] pb-8 items-center">
                    <Icons.ArrowLeft />
                    <div className="flex">
                        <Link to="/dashboard/cart">Cart</Link>
                        &nbsp;/&nbsp;
                        <div className="text-primary">Shipping information</div>
                    </div>
                </div>
                <div className="bg-dark-bg py-3.5 rounded-lg mb-8">
                    <div className="w-max mx-auto">progress bar</div>
                </div>
                <div className="flex items-center bg-dark-bg w-max mx-auto mb-8">
                    <div className="px-16 pt-8 pb-3 text-center text-primary text-lg">
                        <img src={bike} alt="bike" />
                        <p>On the way</p>
                    </div>
                    <div className="relative">
                        <img src={map} alt="map" />
                        <div className="flex justify-between bg-dark-bg absolute bottom-0 w-full px-6 py-3 text-xs">
                            <div className="text-center space-y-1">
                                <p>Estimated arrival</p>
                                <p className="text-primary">20:10 - 20:30</p>
                            </div>
                            <div className="text-center space-y-1">
                                <p>Rider</p>
                                <p className="text-primary">Bryan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-8">Suggested Products</div>
                <ProductCard
                    openModalAddProduct={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    quantity={5}
                    variant={"row"}
                />
            </div>
        </>
    );
}
