import { useEffect, useContext } from "react";

import { UserDataContext } from "../../contexts/UserContext";

import { fetchUserData } from "../../app/api";
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
    }, [setUserData]);

    return userData ? (
        <>
            {userData.address
                .filter((address) => address.isDefault)
                .map((addressItem, index) => (
                    <div
                        key={index}
                        className="flex justify-between lg:space-x-1"
                    >
                        <div className="flex space-x-3.5 lg:space-x-2 items-start">
                            <img className="md:w-5 md:h-5" src={location} alt="location" />
                            <div>
                                <div>
                                    {addressItem
                                        ? AddressToString(addressItem)
                                        : ""}
                                </div>
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
