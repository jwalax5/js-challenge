import React, { TextareaHTMLAttributes } from 'react';


interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder: string;
  disabled?: boolean;
  rows: number;
  cols: number;
  maxlength?: number;
  errorMessage?: string;
}


const Textarea: React.FC<InputProps> = ({
  name,
  placeholder,
  disabled,
  cols,
  rows,
  maxLength,
}) => {
  return (
    <React.Fragment>
      <textarea
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
      />
    </React.Fragment>
  );
};

export default Textarea;
