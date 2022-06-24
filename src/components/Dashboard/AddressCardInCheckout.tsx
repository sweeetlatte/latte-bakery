import { useEffect, useState, useContext } from "react";

import { UserDataContext } from "../../contexts/userContext";

import "./dashboard.css";

import { IUser } from "../../types";
import { fetchUserData } from "../../app/api";
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
                    <div className="space-y-1">
                        {addressItem.isDefault === true ? (
                            <p>DEFAULT SHIPPING ADDRESS</p>
                        ) : (
                            <></>
                        )}
                        <p className="text-white">
                            {AddressToString(addressItem!)}
                        </p>
                        <p>
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
