import React from 'react'
import iconSTAR from '../../img/icons8-star.png';

import './RatingsBox.css';

const RatingsBox = () => {
  return (
    <div className='rb-container'>
        <div className="star-container">
            <img src={iconSTAR} alt="starIcon" />
            <img src={iconSTAR} alt="starIcon" />
            <img src={iconSTAR} alt="starIcon" />
            <img src={iconSTAR} alt="starIcon" />
            <img src={iconSTAR} alt="starIcon" />
            <p>5.0</p>
        </div>
        <p className='reviews'>7 Reviews</p>
        <p className='buyers'>19 buyers</p>
    </div>
  )
}

export default RatingsBox