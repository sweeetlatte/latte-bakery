import { useEffect, useState } from "react";

import { IUser } from "../../types";
import { fetchUserData } from "../../app/api";

import trash from "../../assets/icons/trash-2.svg";
import edit from "../../assets/icons/edit.svg";
import { AddressToString } from "../../utils/functions";
import { Link } from "react-router-dom";

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
