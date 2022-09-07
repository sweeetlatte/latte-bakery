import { Link } from "react-router-dom";

import AddressCard from "../../../../components/Dashboard/AddressCard";

export default function AddressBook() {
    return (
        <>
            <div className="flex sm:flex-col justify-between items-center sm:items-start">
                <div className="settings-title">Address book</div>
                <Link
                    to="add-address"
                    className="text-primary sm:w-full sm:text-xs sm:mt-4 sm:border sm:border-primary sm:rounded-lg sm:px-5 sm:py-4"
                >
                    + Add new address
                </Link>
            </div>
            <div className="pt-10 sm:pt-6 space-y-4">
                <AddressCard />
            </div>
        </>
    );
}
