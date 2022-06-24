import { useEffect, useState, useContext } from "react";

import { UserDataContext } from "../../contexts/userContext";

import { fetchUserData } from "../../app/api";
import { IUser } from "../../types";
import { AddressToString } from "../../utils/functions";

import location from "../../assets/icons/location.svg";

export default function SelectedAddress() {
    const { userData, setUserData } = useContext(UserDataContext);

    useEffect(() => {
        (async () => {
            const responseData = await fetchUserData();

            if (responseData.length > 0) {
                setUserData(responseData[0]);
            }
        })();
    }, []);
    
    return userData ? (
        <>
            {userData.address
                .filter((address) => address.isDefault)
                .map((addressItem, index) => (
                    <div key={index} className="flex justify-between">
                        <div className="flex space-x-3.5 items-start">
                            <img src={location} alt="location" />
                            <div>
                                <div>{AddressToString(addressItem!)}</div>
                                <div className="text-caption text-xs pt-1.5">
                                    {addressItem?.name} - {addressItem?.phone}
                                </div>
                            </div>
                        </div>
                        {addressItem.isDefault === true ? (
                            <div className="basis-3/12 text-right text-caption">
                                Default
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                ))}
        </>
    ) : (
        <></>
    );
}
