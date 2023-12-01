import CartItem from './CartItem'
import { TProduct } from '../../Layout/app/Types'
import React, { useState } from 'react';
import {  Input } from 'antd';
import CheckoutForm from './CheckoutForm';

const { TextArea } = Input;

const CartBody = () => {
  const Product =   {
    id : 1,
    name:"Classic Rolex Watch",
    img : "../Product/Product.png",
    off : 15,
    rate:4.5,
    price:200,
    old_price:250,
    brand : "karim",
    description:"Wireless Bluetooth HeadsetFM Frequency Response: 87.5 108 MHz Feature: FM Radio, Card Supported (Micro SD / TF)Made in China",


  }
  const data :TProduct[] = [  Product,Product,Product ] 

  const [value, setvalue] = useState(null)

   return (
    <div className="CartBody">
            <div className="CartBody_Left">
            { data?.map((item ,index)=>{
            return(
          <div key={index}>  <CartItem item={item}/> </div>
           ) })  }
           </div>
            <div className='CartBody_Right'>
             <CheckoutForm/>
            </div>
    </div>
  )
}

export default CartBody