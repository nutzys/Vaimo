import React from 'react'

const Product = () => {
  return (
    <div className='product-container'>
      <div className="title-container">
        <p>Title</p>
      </div>
      <div className="price-container">
        <p>Price</p>
      </div>
      <div className="counter">
        <button>-</button>
        <p>0</p>
        <button>+</button>
      </div>
    </div>
  )
}

export default Product
