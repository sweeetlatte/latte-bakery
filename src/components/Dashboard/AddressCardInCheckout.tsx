import { useEffect, useState, useContext } from "react";

import "./dashboard.css";

import { UserDataContext } from "../../contexts/UserContext";
import { AddressToString } from "../../utils/functions";

import Icons from "../Icons";

export default function AddressCardInCheckout() {
    const { userData } = useContext(UserDataContext);
    const [selectedAddress, setSelectedAddress] = useState<number>();

    useEffect(() => {
        if (userData && userData.address) {
            setSelectedAddress(
                userData.address.indexOf(
                    userData.address.filter((address) => address.isDefault)[0]
                )
            );
        }
    }, [userData]);

    return userData ? (
        <>
            {userData.address.map((addressItem, index) => (
                <div
                    key={index}
                    className="bg-dark-bg rounded-lg py-4 pl-4 pr-10 text-sm text-caption relative"
                    onClick={() => setSelectedAddress(index)}
                >
                    <div className="absolute right-4 top-4 w-5 h-5 bg-light rounded-full">
                        {index === selectedAddress ? <Icons.Tick /> : <></>}
                    </div>
                    <div className="space-y-2">
                        {addressItem.isDefault === true ? (
                            <p className="lg:text-xs">
                                DEFAULT SHIPPING ADDRESS
                            </p>
                        ) : (
                            <></>
                        )}
                        <p className="text-white">
                            {AddressToString(addressItem!)}
                        </p>
                        <p className="lg:text-xs">
                            {addressItem?.name} - {addressItem?.phone}
                        </p>
                    </div>
                </div>
            ))}
        </>
    ) : (
        <></>
    );
}
