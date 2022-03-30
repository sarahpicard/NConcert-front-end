import { Link } from 'react-router-dom'
import { useState } from 'react'

import 'react-pro-sidebar/dist/css/styles.css'
import './NavBar.css'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    {user ?
      <div className="sidebar whole-navigation-bar">
        <div className="logo-content">
          <div className="logo">
            <i className="bx bxl-deezer nav_icon_item"></i>
            <div className="logo_name">
              <Link to='/' className='link_tag_destination_home'>N'Concert</Link>
            </div>
          </div>
        </div>
        <ul className='nav_list'>
          <li className='nav_li_item'>
            <Link to='/profiles' className='link_tag_destination'>
              <i className='bx bxs-face nav_icon_item'></i>
              <span className="links_name">Profiles</span>
            </Link>
          </li>
          <li className='nav_li_item'>
            <Link to='/myevents' className='link_tag_destination'>
              <i className='bx bxs-calendar-event nav_icon_item'></i>
              <span className="links_name">My Events</span>
            </Link>
          </li>
          <li className='nav_li_item'>
            <Link to='/favorites' className='link_tag_destination'>
              <i className='bx bxs-star nav_icon_item'></i>
              <span className="links_name">Favorites</span>
            </Link>
          </li>
          <li className='nav_li_item'>
            <Link to='/events' className='link_tag_destination'>
              <i className='bx bxs-file-find nav_icon_item'></i>
              <span className="links_name">Search Events</span>
            </Link>
          </li>
          <li className='nav_li_item'>
            <Link to='/changePassword' className='link_tag_destination'>
              <i className='bx bxs-lock-alt nav_icon_item'></i>
              <span className="links_name">Change Password</span>
            </Link>
          </li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            <Link to='' onClick={handleLogout} className='link_tag_destination'>
              <div  id="logout">
                <i className="bx bxs-log-out nav_icon_item_logout"></i>
                <span className='logout-btn'>Logout</span>
              </div>
            </Link>
          </div>
        </div>
      </div> 
      : 
      <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <i className="bx bxl-deezer nav_icon_item"></i>
          <div className="logo_name">
            <Link to='/' className='link_tag_destination'>N'Concert</Link>
          </div>
        </div>
      </div>
      <ul className='nav_list'>
        <li className='nav_li_item'>
          <Link to='/login' className='link_tag_destination'>
            <i className='bx bxs-log-in nav_icon_item'></i>
            <span className="links_name">Login</span>
          </Link>
        </li>
        <li className='nav_li_item'>
          <Link to='/signup' className='link_tag_destination'>
            <i className='bx bxs-message-square-add nav_icon_item'></i>
            <span className="links_name">Sign Up</span>
          </Link>
        </li>
        <li className='nav_li_item'>
          <Link to='/events' className='link_tag_destination'>
            <i className='bx bxs-file-find nav_icon_item'></i>
            <span className="links_name">Search Events</span>
          </Link>
        </li>
      </ul>
    </div> 
    }
    </>
  )
}

export default NavBar
