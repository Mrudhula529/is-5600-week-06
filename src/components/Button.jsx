import React from 'react';

const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`pa2 br2 ba mr2 ${disabled ? 'o-50 pointer-events-none' : 'pointer dim'}`}
    >
      {text}
    </button>
  );
};

export default Button;
