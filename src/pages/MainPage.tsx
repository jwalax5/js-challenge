import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const MainPage = () => {
	return (
		<React.Fragment>
			<Header title="A letter to Santa" />
			<MainContent />
			<Footer name={'Glitch'} url={'https://glitch.com'} />
		</React.Fragment>
	);
};

export default MainPage;
