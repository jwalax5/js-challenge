import React, { useState } from 'react';
import InputText from './InputText';
import Textarea from './Textarea';
import Button from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface FormData {
	childName: string;
	gift: string;
}

const MainContent: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		childName: '',
		gift: ''
	});

	const navigate = useNavigate();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, childName: e.target.value }));
	};

	const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormData((prev) => ({ ...prev, gift: e.target.value }));
	};

	const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log(formData);
		axios
			.post('http://localhost:5000/api/gift', formData)
			.then((response) => {
				console.log(response);
				console.log(response.data);
				navigate('/success', { state: { data: response.data.data } });
			})
			.catch((error) => {
				console.log(error);
				navigate('/error', {
					state: {
						errorMessage: error.message,
						...(error.response && { reason: error.response.data })
					}
				});
			});
	};

	return (
		<>
			<main>
				<p className="bold">Ho ho ho, what you want for Christmas?</p>
				who are you?
				<InputText
					name={'userid'}
					placeholder={'charlie.brown'}
					value={''}
					onchange={handleInputChange}
				/>
				<form method="post">
					what do you want for christmas?
					<Textarea
						name={'wish'}
						placeholder={'Gifts!'}
						disabled={false}
						rows={10}
						cols={45}
						maxlength={100}
						onchange={handleTextareaChange}
					/>
					<br />
					<Button text={'Send'} id="submit-letter" onClick={submitForm} />
				</form>
			</main>
		</>
	);
};

export default MainContent;
