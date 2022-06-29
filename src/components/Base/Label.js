/**
 * Create Label Element
 * @param {Object} props - pass props to react component
 * @param {string} props.id - id of HTML Element
 * @param {string=} props.text - Text to display in label
 * @param {string=} props.children - Other HTML component to display (input element)
 * @returns {React.ReactHTMLElement} - Label Element
 */
const Label = ({ id, text, children }) => {
  return (
    <label htmlFor={id}>
      {text && <p>{text}</p>}
      {children}
    </label>
  );
};

export default Label;
