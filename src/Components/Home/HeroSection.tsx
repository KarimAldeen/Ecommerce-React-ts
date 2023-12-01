import React from 'react'
import CarouselApp from '../Ui/Carousel'

const HeroSection = () => {
  return (
<div className='HeroSection'>
      <div className='HeroSection_Carousel'>
      <CarouselApp/>
      </div>
      <div className='HeroSection_Ads'>
        <div className='Ad_Container'>
        <img alt='' className='banner1'  src='../HeroSection/ad1.jpg' />
        <div className='Ad_Info'>
          <h4 className=''>NEW ARRIVALS</h4>
          <h5>SUMMER SALE <br/> <strong>30% OFF</strong></h5>
          <a href="/">Shop Now  </a>
        </div>
        </div>
        <div className='Ad_Container'>
        <img alt='' className='banner1'  src='../HeroSection/ad2.jpg' />
        <div className='Ad_Info'>
          <h4 className=''>NEW ARRIVALS</h4>
          <h5>SUMMER SALE <br/> <strong>40% OFF</strong></h5>
          <a href="/">Shop Now  </a>
        </div>
        </div>
      </div>

     </div>  )
}

export default HeroSection