import React from 'react'

import clock from '../../img/icons8-clock.png';

import './Countdown.css';

const Countdown = () => {
  return (
    <div className='countdown-container'>
      <div className="discount-container">
        <p>20% OFF </p>
      </div>
      <div className="ends-contianer">
        <p>Discount ends in</p>
      </div>
      <div className="counter-container">
        <img src={clock} alt="clockimg" className='clock'/>
        <p>2d:01h:56m:49s</p>
      </div>
    </div>
  )
}

export default Countdown
