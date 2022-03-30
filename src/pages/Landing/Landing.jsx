import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import Search from "../Search/Search.jsx"
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

import './Landing.css'

const Landing = ({ user }) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => {setProfiles(profiles)})
  }, [])


  return (
    <div className='whole-landing-page'>
    {user ?
      <div>
        <h1>Hello, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}! 👋</h1>
        <h5>Welcome back!</h5>
        <Link to={`/profile/${user?.profile}`} state={user}>
          View My Profile
        </Link>
      </div>
      : 
      <div>
        <h1>Hello, Stranger 👋</h1>
        <h5>Welcome to the party!</h5>
      </div>
    }

      <h1>Search Events!</h1>
      <Search />
    </div>
  )
}

export default Landing
