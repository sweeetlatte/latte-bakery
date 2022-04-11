import { IAddress } from "../../types";

export function AddressToString(address: IAddress) {
    return (
        address.street +
        " Street, " +
        address.wards +
        ", " +
        address.district +
        ", " +
        address.province +
        " City"
    );
}
