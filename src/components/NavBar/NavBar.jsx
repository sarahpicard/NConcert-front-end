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
      <div className="sidebar">
        <div className="logo-content">
          <div className="logo">
            <i className="bx bxl-deezer"></i>
            <div className="logo_name">N'Concert</div>
          </div>
          <i className="bx bx-menu" id="nav-menu-btn"></i>
        </div>
        <ul className='nav_list'>
          <li>
            <a href="#">
              <i className='bx bxs-face'></i>
              <span className="links_name">Profiles</span>
            </a>
            {/* <span className="tooltip">Profiles</span> */}
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-calendar-event'></i>
              <span className="links_name">My Events</span>
            </a>
            {/* <span className="tooltip">Profiles</span> */}
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-star'></i>
              <span className="links_name">Favorites</span>
            </a>
            {/* <span className="tooltip">Profiles</span> */}
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-file-find'></i>
              <span className="links_name">Search Events</span>
            </a>
            {/* <span className="tooltip">Profiles</span> */}
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-lock-alt'></i>
              <span className="links_name">Change Password</span>
            </a>
            {/* <span className="tooltip">Profiles</span> */}
          </li>
        </ul>
        <i className="bx bxs-log-out">Logout</i>
      </div>


    {/* <div id="header">
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
              <Link to='/events'>Events</Link>
            </MenuItem>
          </ul>
        </SidebarContent>
      </ProSidebar>
      }
    </div> */}
    </>
  )
}

export default NavBar
