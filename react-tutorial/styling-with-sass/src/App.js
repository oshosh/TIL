import React from 'react';
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size='large' color='blue'>BUTTON</Button>
        <Button size='medium' color='blue'>BUTTON</Button>
        <Button size='small' color='blue'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size='large' color='gray'>BUTTON</Button>
        <Button size='medium' color='gray'>BUTTON</Button>
        <Button size='small' color='gray'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size='large' color='pink'>BUTTON</Button>
        <Button size='medium' color='pink'>BUTTON</Button>
        <Button size='small' color='pink'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button outline={true} size='large' color='blue'>BUTTON</Button>
        <Button outline={true} size='medium' color='gray'>BUTTON</Button>
        <Button outline={true} size='small' color='pink'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button fullWidth={true} size='large' color='blue' className="cusstomized-button">BUTTON</Button>
        <Button fullWidth={true} size='large' color='gray'>BUTTON</Button>
        <Button
          fullWidth={true}
          size='large'
          color='pink'
          onClick={()=> {
            console.log("클릭");
          }}
        >BUTTON</Button>
      </div>
    </div>
  );
}

export default App;
