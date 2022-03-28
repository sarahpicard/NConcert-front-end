import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, MenuItem, Menu } from 'react-pro-sidebar'

import 'react-pro-sidebar/dist/css/styles.css'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  const [menuCollapse, setMenuCollapse] = useState(false)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
  }
  return (
    <>
    <div id="header">
      {user ?
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className='logotext'>
            <Link to='/'>N'Concert</Link><br />
            Welcome, {user.name}
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {menuCollapse ? (
              <p>expand</p>
            ) :
              <p>collapse</p>
            }
          </div>
        </SidebarHeader>
        <SidebarContent>
          <ul>
            <MenuItem active={true}>
              <Link to="/profiles">Users (friendsToggle)</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/changePassword">Change Password</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/myevents'>My Events</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/favorites'>Favorites</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/events'>Events</Link>
            </MenuItem>
          </ul>
        </SidebarContent>
        <SidebarFooter>
          <ul>
            <MenuItem>
              <Link to="" onClick={handleLogout}>LOG OUT</Link>
            </MenuItem>
          </ul>
        </SidebarFooter>
      </ProSidebar>
      :
      <ProSidebar>
        <SidebarHeader>
          <div className='logotext'>
            <Link to='/'>N'Concert</Link>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <ul>
            <MenuItem>
              <Link to="/login">Log In</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signup">Sign Up</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signup">Sign Up</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/events'>Events</Link>
            </MenuItem>
          </ul>
        </SidebarContent>
      </ProSidebar>
      }
    </div>
    </>
  )
}

export default NavBar
