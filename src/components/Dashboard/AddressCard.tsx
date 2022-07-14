import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IUser } from "../../types";
import { fetchUserData } from "../../app/api";
import { AddressToString } from "../../utils/functions";
import Icons from "../Icons";

import edit from "../../assets/icons/edit.svg";

export default function AddressCard() {
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
            {userData.address.map((addressItem, index) => (
                <div
                    key={index}
                    className="border border-primary rounded-lg px-5 py-4 flex justify-between items-start"
                >
                    <div className="space-y-1">
                        <p>{addressItem?.name}</p>
                        <p>{addressItem?.phone}</p>
                        <p>{AddressToString(addressItem!)}</p>
                    </div>
                    <div className="flex space-x-3">
                        <Icons.Trash stroke="#f83b3b" />
                        <Link
                            to="edit-address"
                            state={{ address: addressItem }}
                        >
                            <img
                                className="cursor-pointer"
                                // onClick={() =>
                                //     navigate("edit-address", {
                                //         state: { address: addressItem },
                                //     })
                                // }
                                src={edit}
                                alt="edit"
                            />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    ) : (
        <></>
    );
}
