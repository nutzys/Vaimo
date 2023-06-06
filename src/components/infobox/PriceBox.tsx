import React from 'react'

import './PriceBox.css';

const PriceBox = () => {
  return (
    <div className='pricebox-container'>
        <div className="prices-container">
            <p className='price'>R 78.50 - R 895.31</p>
            <p className='old-price'>R 98.12 - R 1,119.14</p>
        </div>
        <div className="option-container">
            <p className='option'>/Option</p>
            <p className='options'>2 Options</p>
            <p className='min-order'>(Min. Order)</p>
        </div>
    </div>
  )
}

export default PriceBox