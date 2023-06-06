import React from 'react'
import Product from './Product'

import './ProductList.css';

const ProductList = () => {
  return (
    <div>
        <div className="option-container">
            <p>Options: </p>
        </div>
        <div className="product-container">
            <Product/>
        </div>
    </div>
  )
}

export default ProductList
