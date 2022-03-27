import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { showProfile } from "../../services/profileService"

const ProfilePage = (props) => {
  const [profile, setProfile] = useState()
  let location = useLocation()
  
  useEffect(() => {
    console.log(location)
    showProfile(location.state.profile)
    .then(profileData => setProfile(profileData))
  })

  return (
    <>
    {props.user  ? 
      <>
        {console.log(props.user._id)}
        {console.log(profile)}
        <h1>My Profile</h1>
      </>
      :
      <>
        {console.log(props.user)}
        {console.log(props.profile)}
        <h1>Other Person's Profile</h1>
      </>
    }
  </>
  )
}

export default ProfilePage