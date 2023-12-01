import React from 'react'
import DropdownMenu from '../Ui/DropdownMenu'
import DropDown from '../Ui/DropDown'
import { menuItems } from '../Ui/MenuItemsData'

const BottomBar = () => {
  return (
    <div className="BottomBar">
              <DropdownMenu/>
          <div className='NavMenus'>
          <DropDown title="DropDown" menuItems={menuItems} />
          <DropDown title="DropDown" menuItems={menuItems} />
          <DropDown title="DropDown" menuItems={menuItems} />
          <DropDown title="DropDown" menuItems={menuItems} />
          <DropDown title="DropDown" menuItems={menuItems} />

          </div>
    </div>
  )
}

export default BottomBar