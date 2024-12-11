import React from "react";
import ReactSwitch from "react-switch";

type IsActiveSwitch = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const IsActiveSwitch: React.FC<IsActiveSwitch> = ({ checked, onChange }) => {
  return (
    <ReactSwitch
      checked={checked}
      onChange={onChange}
      offColor="#cac8c8"
      onColor="#72a38f"
      offHandleColor="#f5f5f5"
      onHandleColor="#f5f5f5"
      uncheckedIcon={false}
      checkedIcon={false}
      height={20}
      width={48}
    />
  );
};

export default IsActiveSwitch;
