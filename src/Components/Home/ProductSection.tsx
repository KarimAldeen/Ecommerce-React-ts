import React from 'react'
import SubTitle from './SubTitle'
import CardSwiper from './CardSwiper'
import { TCardProduct } from '../../Layout/app/Types'


const ProductSection = ({title,href,data,count,icon}:TCardProduct) => {
  
  const  TitleProps = { title,href,count,icon}
  return (
    <div className='ProductSection'>
        <SubTitle {...TitleProps} />
      <div className='Cards'>
        <CardSwiper data={data}/>
      </div>
  
    </div>
  )
}

export default ProductSection