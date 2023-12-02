import React from 'react'
import CardProduct from '../../Components/Home/CardProduct'
import { TProduct } from '../../Layout/app/Types'

const ProductsCards = ({style,setstyle}:any) => {
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
  const data :TProduct[] = [  Product,Product,Product,Product,Product ,Product,Product,Product,Product,Product ] 

  return (
    <div className={style ? "ProductsCards" : "ProductsCards2"} >
         {
          data?.map((item:any,index:any)=>{
            return(
              <div className={style ? "" : "FullCard"} key={index}><CardProduct item={item} /></div>

            )
          })
        }
    </div>
  )
}

export default ProductsCards