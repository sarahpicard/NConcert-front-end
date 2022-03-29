import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import Search from "../Search/Search.jsx"
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Landing = ({ user }) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => {setProfiles(profiles)})
  }, [])


  return (
    <>
      <h1>N'Concert</h1>
      {console.log({user})}
      <h1><a href={`/profile/${user.profile}`}>My Profile</a></h1>
      <h1>Search Events!</h1>
      <Search />
    </>
  )
}

export default Landing
