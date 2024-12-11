import { UserModel } from "./../models/users/UserModel";
import axiosInstance from "../utils/axiosInterceptors";
class UserService {
  getAllUsers() {
    return axiosInstance.get<UserModel[], any>("users");
  }
}

export default new UserService();