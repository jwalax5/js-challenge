import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
}

const InputText: React.FC<InputProps> = ({
  name,
  placeholder,
  error,
  disabled = false,
}) => {
  return (
    <React.Fragment>
      <input name={name} placeholder={placeholder} disabled={disabled} />
      {error && <p className='error'>eeeeeeee</p>}
    </React.Fragment>
  );
};

export default InputText;
