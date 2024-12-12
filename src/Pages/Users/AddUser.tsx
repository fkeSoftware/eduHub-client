import React from "react";
import { FormikInput } from "../../Components";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import { AddUserModel } from "../../models/users/AddUserModel";

type Props = {};

const AddUser = (props: Props) => {
  const handleSubmit = async (userRequest: AddUserModel) => {
    await UserService.addUser(userRequest)
      .then((res) => {
        console.log(userRequest);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userValidation = {};

  return (
    <div className="scrollable-layout d-flex f-direction-column align-i-center justify-center ">
      <div className="card-layout rounded-card shadow-card fit-card d-flex f-direction-column align-i-center justify-flex-start">
        <div className="d-flex align-i-center justify-center">
          <p className="sub-head header-light-mode letter-spacing-005 padding-1">
            Add New User
          </p>
        </div>
        <div className="d-flex align-i-center justify-center">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              userName: "",
              email: "",
              idNo: "",
              password: "",
              phoneNumber: "",
              birthDate: "",
              //cityId: 0,
              //districtId: 0,
            }}
            onSubmit={handleSubmit}
            validateOnBlur={true}
          >
            <Form className="form">
              <div className="form__container d-flex f-direction-column justify-center align-i-center padding-05 w100">
                <div className="input__container d-grid grid-column-two gap-2 w100">
                  <FormikInput
                    name="firstName"
                    label="First Name"
                    placeHolder="Enter Your First Name"
                  />
                  <FormikInput
                    name="lastName"
                    label="Last Name"
                    placeHolder="Enter Your Last Name"
                  />
                  <FormikInput
                    name="userName"
                    label="Username"
                    placeHolder="Enter Your Username"
                  />
                  <FormikInput
                    name="birthDate"
                    label="Birthdate"
                    placeHolder="Enter Your Birthdate"
                    type="date"
                  />
                  <FormikInput
                    name="email"
                    label="Email"
                    placeHolder="Enter Your Email"
                    type="email"
                  />
                  <FormikInput
                    name="phoneNumber"
                    label="Phone Number"
                    placeHolder="Enter Your Phone Number"
                  />
                  <FormikInput
                    name="idNo"
                    label="ID No"
                    placeHolder="Enter Your ID No"
                  />
                  <FormikInput
                    name="password"
                    label="Password"
                    placeHolder="Enter Your Password"
                    type="password"
                  />
                  {/*<FormikInput
                    name="districtId"
                    label="districtId"
                    placeHolder="Enter Your districtId"
                  />
                  <FormikInput
                    name="cityId"
                    label="cityId"
                    placeHolder="Enter Your cityId"
                  />*/}
                </div>
                <div className="action__container d-flex f-direction-row justify-space-evenly align-i-center text-center padding-1 w100">
                  <button
                    type="submit"
                    className="default-btn borderless-btn middle-btn rounded-btn success-btn"
                  >
                    Save
                  </button>
                  <Link
                    type="button"
                    to="/user-list"
                    className="default-btn borderless-btn middle-btn rounded-btn danger-btn"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
