import React from 'react'

import './AddToBox.css';

const AddToBox = () => {
  return (
    <div className='atb-container'>
      <div className="header-container">
        <div className="ship-to-container">
          <p>Ship to South Africa
          by Express UPS Sav…</p>
        </div>
        <div className="price-container">
          <p>R 6,036.74</p>
        </div>
      </div>
      <div className="lead-container">
        <p>Lead Time 10 days</p>
      </div>
      <div className="shipping-container">
        <p>Shipping time 6-10 days</p>
      </div>
      <div className="actions-container">
        <button className='login-button'>Login to Purchase</button>
        <button className='contact-button'>Contact the Supplier</button>
      </div>
    </div>
  )
}

export default AddToBox