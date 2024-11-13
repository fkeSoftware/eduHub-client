import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./index.css"
function App() {
  return (
    <div className="App container">
      <br/>
      <button className='borderless-btn success-btn rounded-btn default-btn middle-btn'>SUCCESS</button>
      <button className='borderless-btn info-btn rounded-btn default-btn middle-btn'>INFO</button>
      <button className='borderless-btn warning-btn rounded-btn default-btn middle-btn'>WARNING</button>
      <button className='borderless-btn danger-btn rounded-btn default-btn middle-btn'>DANGER</button>
      <button className='borderless-btn light-btn rounded-btn default-btn middle-btn'>LIGHT</button>
      <button className='borderless-btn dark-btn rounded-btn default-btn middle-btn'>DARK</button>
      <button className='borderless-btn mute-btn rounded-btn default-btn middle-btn'>MUTED</button>
      <button className='borderless-btn primary-btn rounded-btn default-btn middle-btn'>PRIMARY</button>
      <button className='borderless-btn secondary-btn rounded-btn default-btn middle-btn'>SECONDARY</button>
    </div>
  );
}

export default App;
