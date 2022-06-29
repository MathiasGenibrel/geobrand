import React from "react";

import Label from "./Label";

const Select = ({ id, children, changeHandler }) => {
  return (
    <select id={id} onChange={changeHandler}>
      {children}
    </select>
  );
};

const Option = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

const SelectWithOption = ({
  id,
  text,
  optionContent,
  value,
  changeHandler,
}) => {
  return (
    <Label id={id} text={text}>
      <Select id={id} value={value} changeHandler={changeHandler}>
        {optionContent.map((option, index) => (
          <Option key={`${option.value}-${index}`} value={option.value}>
            {option.text}
          </Option>
        ))}
      </Select>
    </Label>
  );
};

export default SelectWithOption;
