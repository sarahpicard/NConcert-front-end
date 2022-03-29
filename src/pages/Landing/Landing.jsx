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
      {console.log(profiles)}
      {profiles.map(profile => {
        console.log(profile)
      })}

      <Search />
    </>
  )
}

export default Landing
