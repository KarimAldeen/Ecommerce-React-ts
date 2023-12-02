import React from 'react'
import WithDrawer from '../../HighOrderComponent/WithDrawer'
import { Badge, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import CardItem from '../Ui/CardItem'
import { Link } from 'react-router-dom'

const ViewCart = () => {
  return (
    <div className='ViewCart'>
         <WithDrawer
    title="Cart Item"
      button={ 
      <Badge className='Badge_Button' count={3}>
          <div className="Cart_Icon">
          <ShoppingCartOutlined  />

          </div>
    </Badge>
    }
    >
      <div className='Drawer_Body'>
      <div className='Card_Items'>
      <CardItem/>
     <CardItem/>
     <CardItem/>
      </div>
    
    <div className='ViewCart_Button'>
   <Link to='/cart'>  <Button type="primary" block>
      view cart
    </Button> </Link>
    </div>
      </div>
    
 
    </WithDrawer>
    </div>
  )
}

export default ViewCart