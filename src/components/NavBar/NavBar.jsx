import { Link } from 'react-router-dom'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, MenuItem } from 'react-pro-sidebar'

import 'react-pro-sidebar/dist/css/styles.css'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <ProSidebar className='custom-nav-bar'>
        <SidebarHeader>
          <Link to='/'>N'Concert</Link><br />
          Welcome, {user.name}
        </SidebarHeader>
        <SidebarContent>
          <ul>
            <MenuItem>
              <Link to="/profiles">Users (friendsToggle)</Link>
            </MenuItem>
            <MenuItem>
              <Link to="" onClick={handleLogout}>LOG OUT</Link>
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
      </ProSidebar>
      :
      <ProSidebar>
        <SidebarHeader>
          <Link to='/'>N'Concert</Link>
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
    </>
  )
}

export default NavBar
