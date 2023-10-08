import React, { useState } from 'react';
import css from './button.module.css';
export const Button = ({ text, onClick }) => {
  const [isBlue, setIsBlue] = useState(false);

  const handleClick = () => {
    setIsBlue(true);
    onClick();
  };

  const buttonStyle = isBlue ? `${css.button} ${css.blue}` : css.button;

  return (
    <button className={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
};
