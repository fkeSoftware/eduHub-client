import React from "react";
import { FiPlusCircle } from "react-icons/fi";

type Props = {};

const UserList = (props: Props) => {
  return (
    <div className="component-layout scrollable-layout d-flex f-direction-column gap-2">
      <div className="card-layout rounded-card shadow-card d-flex f-direction-row justify-space-evenly align-i-center">
        <p className="sub-head header-light-mode">USERS</p>
        <div className="button__container d-flex f-direction-row align-i-center">
          <button
            type="button"
            className="default-btn borderless-btn primary-btn small-btn rounded-btn"
          >
            <FiPlusCircle /> Add New User
          </button>
        </div>
      </div>
      <div className="card-layout rounded-card shadow-card d-flex f-direction-row justify-space-evenly align-i-center">
        user table
      </div>
    </div>
  );
};

export default UserList;
