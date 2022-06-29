import React from "react";

import Label from "./Label";

/**
 * Create Input Element
 * @param {Object} props - pass props to react component
 * @param {string} props.id - id of HTML Element
 * @param {string=} props.type - type of input, referrer to the doc -> https://developer.mozilla.org/fr/docs/Web/HTML/Element/input
 * @param {number=} props.min - minimum value or length for input
 * @param {number=} props.max - maximum value or length for input
 * @param {number=} props.step - step for range or number input type
 * @param {(string|number)} props.value - value of input
 * @callback props.changeHandler - event listener for any change in input
 * @returns {React.ReactHTMLElement} - Input Element
 */
const Input = ({ id, type = "text", min, max, step, value, changeHandler }) => {
  return (
    <input
      id={id}
      name={id}
      type={type}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={changeHandler}
    />
  );
};

/**
 * Create Input with Label Element
 * @param {Object} props - pass props to react component
 * @param {string} props.id - id of HTML Element
 * @param {string=} props.type - type of input, referrer to the doc -> https://developer.mozilla.org/fr/docs/Web/HTML/Element/input
 * @param {string=} props.text - Text to display in label
 * @param {number=} props.min - minimum value or length for input
 * @param {number=} props.max - maximum value or length for input
 * @param {number=} props.step - step for range or number input type
 * @param {(string|number)} props.value - value of input
 * @callback props.changeHandler - event listener for any change in input
 * @returns {React.ReactHTMLElement} - Input in Label Element
 */
const InputWithLabel = ({
  id,
  type,
  text,
  min,
  max,
  step,
  value,
  changeHandler,
}) => {
  return (
    <Label id={id} text={text}>
      <Input
        id={id}
        type={type}
        min={min}
        max={max}
        step={step}
        value={value}
        changeHandler={changeHandler}
      />
    </Label>
  );
};

export default InputWithLabel;
