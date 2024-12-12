import { UserModel } from "./../models/users/UserModel";
import axiosInstance from "../utils/axiosInterceptors";
import { AddUserModel } from "../models/users/AddUserModel";
class UserService {
  getAllUsers() {
    return axiosInstance.get<UserModel[], any>("users");
  }
  addUser(userRequest: AddUserModel) {
    return axiosInstance.post<AddUserModel>("users/add-user", userRequest, {
      headers: {
        "Content-Type" : "application/json",
      }
    });
    
  }
}

export default new UserService();