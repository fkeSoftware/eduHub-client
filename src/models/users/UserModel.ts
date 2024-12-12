export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  idNo: null | string;
  password: string;
  phoneNumber: string;
  birthDate?: string;
  cityId?: number;
  districtId: 1;
  address?: string;
  status:boolean;
}