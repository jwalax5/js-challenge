import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SuccessPage from './pages/SuccessPage';
import ErrorPage from './pages/ErrorPage';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/success" element={<SuccessPage />} />
					{/* Define catch-all route for 404 errors */}
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		);
	}
}

export default App;
