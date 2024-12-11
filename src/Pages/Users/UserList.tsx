import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { MdModeEdit, MdDeleteSweep } from "react-icons/md";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";

import ReactSwitch from "react-switch";
import {
  useTable,
  useSortBy,
  Column,
  TableInstance,
  UseSortByInstanceProps,
} from "react-table";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  action: string;
  status: boolean;
};

const UserList = () => {
  const handleEdit = (index: number) => console.log("Editing row:", index);
  const handleDelete = (index: number) => console.log("Deleting row:", index);

  const data: User[] = React.useMemo(
    () => [
      {
        id: 1,
        name: "Feyza",
        email: "feyza@example.com",
        role: "admin",
        action: "action",
        status: true,
      },
      {
        id: 2,
        name: "Murat",
        email: "murat@example.com",
        role: "user",
        action: "action",
        status: false,
      },
      {
        id: 3,
        name: "Ayşe",
        email: "ayse@example.com",
        role: "admin",
        action: "action",
        status: true,
      },
      {
        id: 4,
        name: "Ali",
        email: "ali@example.com",
        role: "user",
        action: "action",
        status: false,
      },
    ],
    []
  );

  const columns: Column<User>[] = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Role", accessor: "role" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => (
          <div className="d-flex gap-1">
            <label>Passive</label>
            <ReactSwitch
              checked={row.original.status}
              onChange={(checked) => {
                row.original.status = checked;
              }}
              offColor="#cac8c8"
              onColor="#72a38f"
              offHandleColor="#f5f5f5"
              onHandleColor="#f5f5f5"
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={48}
            />
          </div>
        ),
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <div className="d-flex gap-1">
            <button
              className="iconic-btn default-btn borderless-btn rounded-btn warning-btn"
              title="Edit"
              onClick={() => handleEdit(row.index)}
            >
              <MdModeEdit />
            </button>
            <button
              className="iconic-btn default-btn borderless-btn rounded-btn danger-btn"
              title="Delete"
              onClick={() => handleDelete(row.index)}
            >
              <MdDeleteSweep />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  }: TableInstance<User> & UseSortByInstanceProps<User> = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

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
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="sub-head sub-head-light-mode"
                  >
                    {column.Header === "Action" ? (
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
                        )}
                        {column.render("Header")}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="text text-dark-mode"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
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
