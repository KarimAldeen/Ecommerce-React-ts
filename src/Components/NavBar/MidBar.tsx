import KarimLogo from '../../Layout/app/KarimLogo'
import InputAutoComplete from './InputAutoComplete'
import {  Badge, Button } from 'antd';
import { ProfileFilled, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import CardItem from '../Ui/CardItem';
import { Link } from 'react-router-dom';

const MidBar = () => {

  return (
    <div className="MidBar">
        <div className='MidBar_Left'>
            
           <KarimLogo/>
        </div>
        <div className='MidBar_Mid'>
            <InputAutoComplete/>
        </div>
        <div className='MidBar_Right'>
        <div className="Cart_Icon">
          <UserOutlined  />

          </div>
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
    </div>
  )
}

export default MidBar