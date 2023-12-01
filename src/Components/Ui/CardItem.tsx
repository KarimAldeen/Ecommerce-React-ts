import {  CloseOutlined, MinusCircleOutlined, PlusCircleFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import {  Card, Skeleton, Switch ,Popconfirm,Button, Tooltip} from 'antd';
import useLoadingState from '../../Hooks/useLoadingState';
import { TProduct } from '../../Layout/app/Types';


interface CartItemProps {
  item: TProduct;
  index : number ;
}
const CardItem: React.FC  = () => {
  const [loading, resetLoading] = useLoadingState(true, 2000);
  const [Counter, setCounter] = useState<number>(1);
  const [Price, setPrice] = useState<number>(210);

  return (
    <>
      <Skeleton loading={loading} active avatar  style={{ width: 340, marginTop: 22 }}>
      <Card className='CardItem'  style={{ width: 330, marginTop: 16 }} loading={loading}>
      <span className='Card_Counter'>
        <Button  shape="circle" icon={<PlusCircleFilled />} onClick={()=>{setCounter(v => ++v) ; setPrice(v=> 2 * v )} } />
        <div className='Counter'>
          {Counter}
        </div>
        <Button  shape="circle" icon={<MinusCircleOutlined />} onClick={()=>{setCounter(v => v > 1 ? --v : v) ;setPrice(v=> Counter > 1 ? v/2 : v )}} />
      </span>
      <span className='Card_Img'>
      <img alt=''  src='../Product/Product.png'   />
      </span>
      <span className='Card_Info'>
        <h5> Silver High Neck Sweater </h5>
        <h6>  Neck Sweater </h6>
        <strong> ${Price}.00 </strong>
      </span>
      <span className='Card_Delete'>
      <Popconfirm
    title="Delete the Item"
    description="Are you sure to delete this Item?"
    okText="Yes"
    cancelText="No"
  >
      <Tooltip title="Delete" placement="bottom" >

    <Button shape="circle" icon={<CloseOutlined />}  danger/>
    </Tooltip>

  </Popconfirm>
      </span>
      </Card>
      </Skeleton>

    </>
  );
};

export default CardItem;