import { Link } from 'react-router-dom'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Users (friendsToggle)</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to='/'>N'Concert</Link></li>
            <li><Link to='/myevents'>My Events</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
            <li><Link to='/events'>Events</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to='/'>N'Concert</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to='/events'>Events</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
