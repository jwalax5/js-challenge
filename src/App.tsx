import * as React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header title='A letter to Santa' />
        <MainContent />
        <Footer name={'Glitch'} url={'https://glitch.com'} />
      </>
    );
  }
}

export default App;
