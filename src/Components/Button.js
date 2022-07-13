const Button = ({ handleClick, children, type }) => {
  return (
    <button type={type} onClick={handleClick}>{children}</button>
  );
};

export default Button;