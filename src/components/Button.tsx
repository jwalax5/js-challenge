import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}


const Button: React.FC<Props> = ({ onClick, text, disabled = false }) => {
  return (
    <button  onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
