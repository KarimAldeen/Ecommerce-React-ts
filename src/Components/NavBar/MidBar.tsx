import KarimLogo from '../../Layout/app/KarimLogo'
import InputAutoComplete from './InputAutoComplete'
import { Link } from 'react-router-dom';
import ViewCart from './ViewCart';
import { UserOutlined } from '@ant-design/icons';

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
        <Link to="/auth">
          <UserOutlined  />
        </Link>

          </div>
   <ViewCart/>
    
         
        </div>
    </div>
  )
}

export default MidBar