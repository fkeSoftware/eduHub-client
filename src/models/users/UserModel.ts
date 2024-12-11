export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  idNo: null | string;
  password: string;
  phoneNumber: string;
  birthDate: string;
  cityId: number;
  districtId: number;
  address: string;
  status:boolean;
}