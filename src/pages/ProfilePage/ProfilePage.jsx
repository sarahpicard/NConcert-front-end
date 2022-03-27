import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { showProfile } from "../../services/profileService"
import * as profileService from '../../services/profileService'

const ProfilePage = (props) => {
  const [profile, setProfile] = useState()
  let location = useLocation()
  const [profileData, setProfileData] = useState({
    genre: '',
    artist: '',
    bio: '',
  })
  
  useEffect(() => {
    showProfile(location.state.profile)
    .then(profileData => setProfile(profileData))
  })


  const handleAddProfileData = (evt) => {
    setProfileData({...profileData, [evt.target.name]: evt.target.value})
  }

  const submitProfileData = (evt) => {
    evt.preventDefault()
    try {
      profileService.createProfileData(profileData)
      .then(profileData => setProfileData(profileData))
    } catch (err) {
      console.log(err)
    }
  }

  const { bio } = profileData
  const { genre } = profileData
  const { artist } = profileData
  

  return (
    <>
    {props.user.profile === location.state.profile._id  ? 
      <>
        <h1>My Profile</h1>
        <h1>Edit Profile</h1>
          <h4>Add your favorite artists and genres!</h4>
          <form onSubmit={submitProfileData}>
            <label>Bio:
              <input type="text" value={bio} name="bio" autoComplete="off" onChange={handleAddProfileData}/>
            </label>
            <label>Genre:
              <input type="text" value={genre} name="genre" autoComplete="off" onChange={handleAddProfileData}/>
            </label>
            <label>Artist:
              <input type="text" value={artist} name="artist"  onChange={handleAddProfileData} />
            </label>
            <button type="submit">Update Profile</button>
          </form>
      </>
      :
      <>
        {console.log("userId: ", props.user)}
        {console.log("profileId: ", location.state.profile._id)}
        <h1>Other Person's Profile</h1>
        <button>Add Friend</button>
      </>
    }
  </>
  )
}

export default ProfilePage