import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import Artist from '../../components/Artist/Artist'
import Genre from '../../components/Genre/Genre'

const EditProfile = (props) => {
  const [profile, setProfile] = useState()
  const [profileData, setProfileData] = useState({
    genre: '',
    artist: '',
    bio: '',
    spotify: '',
  })

  // useEffect(() => {
  //   showProfile(props.user.profile)
  //   .then(profileData => setProfile(profileData))
  // })

  const handleUpdateProfile = (evt) => {
    console.log("something here")
  }

  const handleUpdateProfileData = (evt) => {
    setProfileData({...profileData, [evt.target.name]: evt.target.value})
  }

  const { bio } = profileData
  const { genre } = profileData
  const { artist } = profileData
  const { spotify } = profileData

  return(
    <>
      <h1>Edit Profile Page</h1>
      <h4>Add or Delete your favorite artists and genres:</h4>
      <form onSubmit={handleUpdateProfile}>
        <label>Bio:
          <input type="text" value={bio} name="bio" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <label>Genre:
          <input type="text" value={genre} name="genre" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <label>Artist:
          <input type="text" value={artist} name="artist"  onChange={handleUpdateProfileData} />
        </label>
        <label>Spotify Playlist:
          <input type="text" value={spotify} name="spotify"  onChange={handleUpdateProfileData} />
        </label>
        <button type="submit">Update Profile</button>
      </form>
      <div>
        {console.log(props)}
        <Artist />
      </div>
      <div>
        <Genre />
      </div>
    </>
  )
}

export default EditProfile