import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
import { TProduct } from '../../Layout/app/Types'
import { Button, Collapse, CollapseProps, ColorPicker, Radio, RadioChangeEvent, Rate } from 'antd'
import { Currency } from '../../Layout/app/Const'
import ProductSection from '../../Components/Home/ProductSection'
import { IoIosFlash } from 'react-icons/io'

const Product = () => {
    const Product : TProduct =   {
        id : 1,
        name:"Classic Rolex Watch",
        img : "../Product/Product.png",
        brand : "karim",
        description:"Wireless Bluetooth HeadsetFM Frequency Response: 87.5 108 MHz Feature: FM Radio, Card Supported (Micro SD / TF)Made in China",
        off : 15,
        rate:4.5,
        price:200,
        old_price:250,

      }
      const data :TProduct[] = [  Product,Product,Product,Product,Product ] 

      const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const descriptionWords = Product?.description?.split(' ');
const label = descriptionWords?.slice(0, 3).join(' ');
const remainingDescription = descriptionWords?.slice(5).join(' ');

  const items: CollapseProps['items'] = [
    {
        key: '1',
        label: label,
        children: <p>{remainingDescription}</p>,
    }
  ];

  return (
    <Layout className='Product'>
      <div className='Product_Info'>
      <div className='Product_Left'>
        <img src={Product?.img} alt={Product?.name} width="100%" height="60%" />

        </div>
        <div className='Product_Right'>
            <h3>{Product?.name}</h3>
           <div>
           <h6>Brand  : </h6> <h6>{Product?.brand}</h6>
           </div>
           <div>
           <h6>Rated  : </h6> <h6><Rate allowHalf disabled defaultValue={Product?.rate} /></h6>
     

           </div>
           
         <div>
                     
         <h6>Color  : </h6>
             <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}> <ColorPicker defaultValue="red" disabled /> </Radio>
      <Radio value={2}><ColorPicker defaultValue="green" disabled /> </Radio>
      <Radio value={3}><ColorPicker defaultValue="blue" disabled /> </Radio>
    
    </Radio.Group>
         </div>
         <div className='Product_Description'>
         <h6>Description  : </h6> 
         <Collapse ghost items={items} />

         </div>
            <div>
            <h6 >Price  : </h6> <h6 className='Price'> {Product?.price} {Currency} </h6>

            </div>
            <div>
    </div>
    <Button type="primary" block>
      Add to Cart
    </Button>
        </div>
      </div>
      <ProductSection title="title" href="/" data={data}  count={10} icon={<IoIosFlash/>} />
      <ProductSection title="title" href="/" data={data}  count={10} icon={<IoIosFlash/>} />



    
    </Layout>
  )
}

export default Product