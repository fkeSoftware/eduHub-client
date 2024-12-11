import React, { useEffect, useState } from "react";
import { ReactTable } from "../../Components";
import { Column, Row } from "react-table";
import ReactSwitch from "react-switch";
import { UserModel } from "../../models/users/UserModel";
import UserService from "../../services/UserService";
import { MdModeEdit, MdDeleteSweep } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";


const UserList = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    UserService.getAllUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleStatusChange = (userId: number, status: boolean) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, status } : user))
    );
  };

  const handleDelete = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleEdit = (userId: number) => {
    console.log(`update user, ID: ${userId}`);
  };

  const columns: Column<UserModel>[] = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phoneNumber" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }: { row: Row<UserModel> }) => (
          <ReactSwitch
            checked={row.original.status}
            onChange={(checked) => handleStatusChange(row.original.id, checked)}
            offColor="#cac8c8"
            onColor="#72a38f"
            offHandleColor="#f5f5f5"
            onHandleColor="#f5f5f5"
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={48}
          />
        ),
      },
      {
        Header: "Actions",
        Cell: ({ row }: { row: Row<UserModel> }) => (
          <div className="d-flex gap-2">
            <button
              title="Detail"
              className="iconic-btn default-btn borderless-btn rounded-btn info-btn"
            >
              <BiDetail />
            </button>
            <button
              title="Edit"
              className="iconic-btn default-btn borderless-btn rounded-btn warning-btn"
              onClick={() => handleEdit(row.original.id)}
            >
              <MdModeEdit />
            </button>
            <button
              title="Delete"
              className="iconic-btn default-btn borderless-btn rounded-btn danger-btn"
              onClick={() => handleDelete(row.original.id)}
            >
              <MdDeleteSweep />
            </button>
          </div>
        ),
      },
    ],
    []
  );
  

  return (
    <div className="padding-1 component-layout scrollable-layout d-flex f-direction-column gap-2">
      <div className="d-grid align-i-center grid-column-percent-90">
        <p className="sub-head header-light-mode letter-spacing-005 padding-1">
          USER LIST
        </p>
        <div className="button__container d-flex f-direction-row align-i-center justify-flex-end padding-1">
          <Link
            type="button"
            className="default-btn borderless-btn primary-btn small-btn rounded-btn"
            to="/add-user"
          >
            <FiPlusCircle /> Add New User
          </Link>
        </div>
      </div>
      <div className="card-layout rounded-card shadow-card d-flex f-direction-row justify-space-evenly align-i-center">
      <ReactTable columns={columns} data={users} />
      </div>
    </div>
  );
};

export default UserList;
