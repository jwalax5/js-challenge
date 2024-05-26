import React from 'react';
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
	const location = useLocation();
	const { errorMessage, reason } = location.state;

	return (
		<div>
			<h1 style={{ color: 'red' }}>Error</h1>
			<p>Message : {errorMessage}</p>
			{reason && <p>Reason : {reason}</p>}
		</div>
	);
};

export default ErrorPage;
