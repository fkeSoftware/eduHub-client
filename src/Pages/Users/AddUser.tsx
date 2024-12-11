import React from "react";
import { FormikInput } from "../../Components";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

type Props = {};

const AddUser = (props: Props) => {
  const handleSubmit = async () => {};
  const userValidation = {};
  return (
    <div className="scrollable-layout d-flex f-direction-column align-i-center justify-flex-start">
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
                ></FormikInput>
                <FormikInput
                  name="lastName"
                  label="Last Name"
                  placeHolder="Enter Your Last Name"
                ></FormikInput>
                <FormikInput
                  name="userName"
                  label="Username"
                  placeHolder="Enter Your Username"
                ></FormikInput>
                <FormikInput
                  name="birthDate"
                  label="Birthdate"
                  placeHolder="Enter Your Birthdate"
                  type="date"
                ></FormikInput>
                <FormikInput
                  name="email"
                  label="Email"
                  placeHolder="Enter Your Email"
                  type="email"
                ></FormikInput>
                <FormikInput
                  name="phoneNumber"
                  label="Phone Number"
                  placeHolder="Enter Your Phone Number"
                ></FormikInput>
                <FormikInput
                  name="idNo"
                  label="ID No"
                  placeHolder="Enter Your ID No"
                ></FormikInput>
                <FormikInput
                  name="password"
                  label="Password"
                  placeHolder="Enter Your Password"
                  type="password"
                ></FormikInput>
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
  );
};

export default AddUser;
