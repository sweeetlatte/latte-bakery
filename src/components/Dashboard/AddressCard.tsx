import React from "react";

import trash from "../../assets/icons/trash-2.svg";
import edit from "../../assets/icons/edit.svg";

export default function AddressCard() {
    return (
        <div className="border border-primary rounded-lg px-5 py-4 flex justify-between items-start">
            <div className="space-y-1">
                <p>Sweet Latte</p>
                <p>0325698741</p>
                <p>271 Dakao Street, Espresso, Robusta City</p>
            </div>
            <div className="flex space-x-3">
                <img src={trash} alt="trash" />
                <img src={edit} alt="trash" />
            </div>
        </div>
    );
}
