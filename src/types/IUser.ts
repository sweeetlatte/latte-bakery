export interface IUser {
    name: string;
    avatar: string;
    password: string;
    phone: string;
    email: string;
    dob: string;
    gender: boolean;
    id: number;
    address: IAddress[];
}

export interface IAddress {
    name: string;
    phone: string;
    province: string;
    district: string;
    wards: string;
    street: string;
    type: string;
    isDefault: boolean;
}
