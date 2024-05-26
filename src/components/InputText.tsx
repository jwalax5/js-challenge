import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	placeholder: string;
	disabled?: boolean;
	onchange: () => void;
}

const InputText: React.FC<InputProps> = ({
	name,
	placeholder,
	disabled = false,
	onchange
}) => {
	return (
		<React.Fragment>
			<input
				name={name}
				placeholder={placeholder}
				disabled={disabled}
				onChange={onchange}
			/>
		</React.Fragment>
	);
};

export default InputText;
