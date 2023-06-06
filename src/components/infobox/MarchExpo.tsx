import React from 'react'
import logo from '../../img/Logo.png';
import arrow from '../../img/icons8-forward.png';

import './MarchExpo.css';


const MarchExpo = () => {
  return (
    <div className='march-container'>
      <div className="logo-container">
        <img src={logo} className='logo'/>
      </div>
      <div className="ul-container">
        <ul>
            <li>Free shipping (up to $40)</li>
            <li>On-time delivery guaranteed</li>
        </ul>
      </div>
      <div className="arrow-container">
        <img src={arrow} className='arrow' />
      </div>
    </div>
  )
}

export default MarchExpo
