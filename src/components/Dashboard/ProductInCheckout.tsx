import React from "react";

import cake from "../../assets/images/blog-2.png";

export default function ProductInCheckout() {
    return (
        <div
            className="flex text-sm items-center py-4"
            style={{ borderBottom: "1px solid #656870" }}
        >
            <img
                className="w-[65px] h-[65px] object-cover"
                src={cake}
                alt="cake"
            />
            <div className="w-full flex justify-between items-center px-5">
                <div>
                    <div className="text-primary pb-1">Meringue Tart</div>
                    <div className="text-xs pb-[2px]">Filling: Chocolate</div>
                    <div className="text-xs">Quantity: 1</div>
                </div>
                <div>80.000 VND</div>
            </div>
        </div>
    );
}
