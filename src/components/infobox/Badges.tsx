import React from 'react'
import './Badges.css';
import iconOK from '../../img/icons8-ok.png';

const Badges = () => {
  return (
    <div className='badge-container'>
        <div className="rts-container">
            <p className='rts'>Ready to Ship</p>
        </div>
        <div className="is-container">
            <img src={iconOK} alt="okicon" />
            <p className='is'>In Stock</p>
        </div>
        <div className="fd-container">
            <img src={iconOK} alt="okicon" />
            <p className='fd'>Fast Dispatch</p>
        </div>
    </div>
  )
}

export default Badges