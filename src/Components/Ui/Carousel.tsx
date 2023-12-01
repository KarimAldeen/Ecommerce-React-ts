import React from 'react';
import { Carousel } from 'antd';


const CarouselApp: React.FC = () => (
  <Carousel autoplay>
    {[1,2,3,4].map((item,index)=>{
      return(
        <div className='banner_Container' key={index}>
        <img alt='' className='banner1'  src='../HeroSection/banner1.jpg' />
        <div className='banner_Info'>
              <h1 className=''>NEW ARRIVALS</h1>
              <h2>SUMMER SALE <br/> <strong>20% OFF</strong></h2>
              <a href="/">Shop Now &#8599; </a>
            </div>
        </div>
      )
    })}
   
    
    </Carousel>
);

export default CarouselApp;