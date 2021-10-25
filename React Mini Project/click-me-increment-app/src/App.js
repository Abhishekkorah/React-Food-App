import React from 'react';
import './App.css';
import ChangeBackground from './components/ChangeBackground';
import Count from './components/Count';
import DigitalClock from './components/DigitalClock';
import TimeRefreshing from './components/TimeRefreshing';

function App() {

  
  return (
    <div className="background_color">
      <Count />
      <TimeRefreshing/>
      <DigitalClock/>
      <ChangeBackground/>
    </div>
    
  );
}

export default App;
