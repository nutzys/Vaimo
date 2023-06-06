import React from 'react';
import './App.css';
import InfoBox from './components/InfoBox';
import AddToBox from './components/AddToBox';
import img from './img/droneImg.jpg';

function App() {
  return (
    <div className="App">
      <img src={img} className='drone-img'/>
     <InfoBox/>
     <AddToBox/>
    </div>
  );
}

export default App;
