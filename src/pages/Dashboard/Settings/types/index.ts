export interface IUserData {
  name: string;
  avatar: string;
  password: string;
  phone: string;
  email: string;
  dob: string;
  gender: boolean;
  id: number;
  address: {
    name: string;
    phone: string;
    province: string;
    district: string;
    wards: string;
    street: string;
    type: string;
  };
}
