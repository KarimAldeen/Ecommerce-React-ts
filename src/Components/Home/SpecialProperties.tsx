import React from 'react'
import { CarFilled, MoneyCollectOutlined, PayCircleFilled } from '@ant-design/icons'
import { BsCalendarDay } from 'react-icons/bs'

const SpecialProperties = () => {
  return (
    <div className='special_properties'>
    <div className='special_property'>
     <CarFilled/>
     <div>
       <h5>Fast Delivery</h5>
       <p>Start from $10</p>
     </div>
    </div>
      
    <div className='special_property'>
     <MoneyCollectOutlined/>
     <div className='special_property_Info'>
       <h5>Money Guarantee</h5>
       <p>7 Days Back</p>
     </div>
    </div>
    <div className='special_property'>
     <BsCalendarDay/>
     <div>
       <h5>365 Days</h5>
       <p>For free return</p>
     </div>
    </div>
    <div className='special_property special_property_last'>
     <PayCircleFilled/>
     <div>
       <h5>Payment</h5>
       <p>Secure system</p>
     </div>
    </div>
    </div>  )
}

export default SpecialProperties