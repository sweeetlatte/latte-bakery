import { useEffect, useState } from "react";

import { fetchUserData } from "../../app/api";
import { IUser } from "../../types";
import { AddressToString } from "../../utils/functions";

import location from "../../assets/icons/location.svg";

export default function SelectedAddress() {
    const [userData, setUserData] = useState<IUser>();

    useEffect(() => {
        (async () => {
            const responseData = await fetchUserData();

            if (responseData) {
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
