import React from 'react'
import Badges from './infobox/Badges'
import HSProducts from './infobox/HSProducts'

import './InfoBox.css'
import RatingsBox from './infobox/RatingsBox'
import PriceBox from './infobox/PriceBox'
import MarchExpo from './infobox/MarchExpo'
import Countdown from './infobox/Countdown'
import ProductList from './infobox/productlist/ProductList'

const InfoBox = () => {
  return (
    <div className='ib-container'>
      <Badges/>
      <HSProducts/>
      <RatingsBox/>
      <PriceBox/>
      <MarchExpo/>
      <Countdown/>
      <ProductList/>
    </div>
  )
}

export default InfoBox