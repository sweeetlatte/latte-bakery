import React from "react";
import { Link } from "react-router-dom";

import AddressCard from "../../../../components/Dashboard/AddressCard";

export default function AddressBook() {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="font-bold text-lg">Address book</div>
                <Link to="add-address" className="text-primary">
                    + Add new address
                </Link>
            </div>
            <div className="pt-6 space-y-5">
                <AddressCard />
            </div>
        </>
    );
}
