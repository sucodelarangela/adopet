const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick}>{children}</button>
  );
};

export default Button;