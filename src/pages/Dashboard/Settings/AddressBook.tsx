import React from "react";

import AddressCard from "../../../components/Dashboard/AddressCard";

export default function AddressBook() {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="font-bold text-lg">Address book</div>
                <div className="text-primary">+ Add new address</div>
            </div>
            <div className="pt-6 space-y-5">
                <AddressCard />
                <AddressCard />
            </div>
        </>
    );
}
