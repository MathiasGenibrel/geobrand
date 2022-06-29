import { useState } from "react";

/**
 * Create state and function to update value of Input.
 * @param {*} initialValue of your state
 * @callback changeHandler - change state value on each call
 * @returns {[*, changeHandler()]}
 */
export const useInput = (initialValue) => {
  const [value, setValue] = useState(() => initialValue);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, changeHandler];
};
