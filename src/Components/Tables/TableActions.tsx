import React from "react";
import { BiDetail } from "react-icons/bi";
import { MdModeEdit, MdDeleteSweep } from "react-icons/md";
type TableActionsProps = {
  onEdit: () => void;
  onDelete: () => void;
};
const TableActions: React.FC<TableActionsProps> = ({ onEdit, onDelete }) => {
  return (
    <div className="d-flex gap-2 align-i-center">
      <button
        title="Detail"
        className="iconic-btn default-btn borderless-btn rounded-btn info-btn"
      >
        <BiDetail />
      </button>
      <button
        title="Edit"
        className="iconic-btn default-btn borderless-btn rounded-btn warning-btn"
        onClick={onEdit}
      >
        <MdModeEdit />
      </button>
      <button
        title="Delete"
        className="iconic-btn default-btn borderless-btn rounded-btn danger-btn"
        onClick={onDelete}
      >
        <MdDeleteSweep />
      </button>
    </div>
  );
};

export default TableActions;
