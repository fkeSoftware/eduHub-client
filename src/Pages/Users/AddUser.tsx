import React from "react";
import { FormikInput } from "../../Components";

type Props = {};

const AddUser = (props: Props) => {
  return (
    <div className="scrollable-layout">
      <div className="d-flex align-i-center justify-center">
        <p className="sub-head header-light-mode letter-spacing-005 padding-1">
          Add New User
        </p>
      </div>
      <div className="d-flex align-i-center justify-center">
        <FormikInput/>
      </div>
    </div>
  );
};

export default AddUser;
