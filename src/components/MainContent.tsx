import * as React from 'react';
import InputText from './InputText';
import Textarea from './Textarea';
import Button from './Button';


class MainContent extends React.Component {
    render() {
      return (
        <>
          <main>
            <p className="bold">Ho ho ho, what you want for Christmas?</p>
            who are you?
            <InputText  name={'userid'} placeholder={'charlie.brown'} error={false} value={''} />
            <form method='post'>
              what do you want for christmas?
              <Textarea  name={'wish'} placeholder={'Gifts!'} disabled={false} rows={10} cols={45} maxlength={100} />
              <br />
              <Button text={'Send'} id='submit-letter' onClick={function (): void {
                throw new Error('Function not implemented.');
              } } />
            </form>
          </main>
        </>
      );
    }
  }
  
  export default MainContent;
  