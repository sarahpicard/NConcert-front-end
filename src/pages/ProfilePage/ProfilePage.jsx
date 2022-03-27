import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { showProfile } from "../../services/profileService"

const ProfilePage = (props) => {
  const [profile, setProfile] = useState()
  let location = useLocation()
  
  useEffect(() => {
    showProfile(location.state.profile)
    .then(profileData => setProfile(profileData))
  })

  return (
    <>
    {props.user.profile === location.state.profile._id  ? 
      <>
        {console.log("userId: ", props.user._id)}
        {console.log("profileId: ", location.state.profile._id)}
        <h1>My Profile</h1>
      </>
      :
      <>
        {console.log("userId: ", props.user.profile)}
        {console.log("profileId: ", location.state.profile._id)}
        {/* {console.log(props.user)}
        {console.log(props.profile)} */}
        <h1>Other Person's Profile</h1>
      </>
    }
  </>
  )
}

export default ProfilePage