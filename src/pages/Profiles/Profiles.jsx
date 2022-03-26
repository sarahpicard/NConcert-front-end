import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'


const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile=>
          <Link to="/profile">
            <p key={profile._id}>{profile.name}</p>
          </Link>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}
 
export default Profiles