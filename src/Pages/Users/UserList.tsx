import React, { useEffect, useState } from "react";
import { useTable, useSortBy, Column, Row } from "react-table";
import ReactSwitch from "react-switch";
import { UserModel } from "../../models/users/UserModel";
import UserService from "../../services/UserService";
import { MdModeEdit, MdDeleteSweep } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";

const UserList = () => {

  const [users, setUsers] = useState<UserModel[]>([]);

  const getUsers = () => {
    UserService.getAllUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const handleStatusChange = (userId: number, status: boolean) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, status } : user))
    );
  };

  const handleDelete = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleEdit = (userId: number) => {
    console.log(`update user , ID: ${userId}`);
  };

  useEffect(() => {
    getUsers();
  }, []);


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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: users,
      },
      useSortBy
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
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...restHeaderGroupProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...rest } = column.getHeaderProps(column.getSortByToggleProps());
                    return (
                      <th key={column.id} {...rest} className="sub-head sub-head-light-mode">
                        {column.Header === "Actions" ? (
                          <span>{column.render("Header")}</span>
                        ) : (
                          <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <FaSortAlphaDown />
                              ) : (
                                <FaSortAlphaUp />
                              )
                            ) : (
                              <LuArrowDownUp />
                            )}{" "}
                            {column.render("Header")}
                          </span>
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              const { key, ...restRowProps } = row.getRowProps();
              return (
                <tr key={row.id} {...restRowProps}>
                  {row.cells.map((cell) => {
                    const { key, ...restCellProps } = cell.getCellProps();
                    return (
                      <td key={cell.column.id} {...restCellProps} className="text text-dark-mode">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
