import { useState } from 'react';

const Input = ({ id, type, placeholder, children }) => {
  const [inputType, setInputType] = useState(type);

  const changeType = () => {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  return (
    <>
      <label htmlFor={id}>{children}</label>
      {
        type === 'password' ? (
          <span>
            <span onClick={() => changeType(type)} className='pass__view'></span>
            <input id={id} name={id} type={inputType} placeholder={placeholder} />
          </span>
        ) : (
          <input id={id} name={id} type={type} placeholder={placeholder} />
        )
      }
    </>
  );
};

export default Input;