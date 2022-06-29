import React from "react";

import Input from "./Input";
import Select from "./Select";

export const Form = ({ formContent }) => {
  return (
    <form onSubmit={formContent.submitHandler}>
      {formContent.inputs.map((item, index) => {
        if (item.type === "select")
          return (
            <Select
              key={`select-${index}`}
              id={`select-${index}`}
              text={item.text}
              optionContent={item.options}
              value={item.value}
              changeHandler={item.changeHandler}
            />
          );

        return (
          <Input
            key={`input-${item.type}-${index}`}
            id={`input-${item.type}-${index}`}
            type={item.type}
            text={item.text}
            min={item.min}
            max={item.max}
            step={item.step}
            value={item.value}
            changeHandler={item.changeHandler}
          />
        );
      })}
      <button type="submit">{formContent.button.submit}</button>
    </form>
  );
};
