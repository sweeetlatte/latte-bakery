import React from "react";

import cake from "../../assets/images/products/cake-1.png";
import cartIcon from "../../assets/icons/cart.svg";

export default function ProductCardRgba() {
    return (
        <div className="bg-white-rgba w-[15.688rem] h-[15.563rem] rounded-lg px-[1.875rem] pt-[1.875rem] text-left">
            <img src={cake} alt="banner" />
            <div className="pt-2.5 text-sm font-medium">60.000 VND</div>
            <div className="flex justify-between items-center pt-1.5">
                <div className="font-medium text-primary">Mince Pie</div>
                <button className="border border-primary bg-primary px-2.5 py-1 rounded-md flex items-center">
                    <img className="pr-1" src={cartIcon} alt="cart icon" />
                    Add
                </button>
            </div>
        </div>
    );
}
