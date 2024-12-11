import React from "react";
import { useTable, useSortBy, Column, Row } from "react-table";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

const ReactTable = <T extends object>({ columns, data }: TableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <table {...getTableProps()} className="custom-table">
        <thead>
            {headerGroups.map((headerGroup) => {
              const { key, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...restHeaderGroupProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...rest } = column.getHeaderProps(
                      column.getSortByToggleProps()
                    );
                    return (
                      <th
                        key={column.id}
                        {...rest}
                        className="sub-head sub-head-light-mode"
                      >
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
                      <td
                        key={cell.column.id}
                        {...restCellProps}
                        className="text text-dark-mode"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
    </table>
  );
};

export default ReactTable;
