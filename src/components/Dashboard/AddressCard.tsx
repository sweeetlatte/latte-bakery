import React, { useEffect, useState } from "react";

import { IUser } from "../../types";
import { fetchUserData } from "../../app/api";

import trash from "../../assets/icons/trash-2.svg";
import edit from "../../assets/icons/edit.svg";
import { AddressToString } from "../../utils/functions";
import { useNavigate } from "react-router-dom";

export default function AddressCard() {
    const navigate = useNavigate();
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
            {userData.address.map((addressItem) => (
                <div className="border border-primary rounded-lg px-5 py-4 flex justify-between items-start">
                    <div className="space-y-1">
                        <p>{addressItem?.name}</p>
                        <p>{addressItem?.phone}</p>
                        <p>{AddressToString(addressItem!)}</p>
                    </div>
                    <div className="flex space-x-3">
                        <img
                            className="cursor-pointer"
                            src={trash}
                            alt="trash"
                        />
                        <img
                            className="cursor-pointer"
                            onClick={() =>
                                navigate("editaddress", {
                                    state: { address: addressItem },
                                })
                            }
                            src={edit}
                            alt="edit"
                        />
                    </div>
                </div>
            ))}
        </>
    ) : (
        <></>
    );
}
