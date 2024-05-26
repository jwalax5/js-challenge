import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
	const location = useLocation();
	const { childName, gift } = location.state.data;

	return (
		<div>
			<h1 style={{ color: 'green' }}>Success</h1>
			<p>Hello {childName} !</p>
			<p>Your request : {gift} has been received ! </p>
		</div>
	);
};

export default SuccessPage;
