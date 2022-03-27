import { useState } from 'react'
// import * as profileService from '../../services/profileService'

const EditProfile = (props) => {
  const [profileData, setProfileData] = useState({
    genre: '',
    artist: '',
    bio: '',
  })

  const handleAddProfileData = (evt) => {
    setProfileData({...profileData, [evt.target.name]: evt.target.value})
  }

  const submitProfileData = (evt) => {
    evt.preventDefault()
    try {
      // profileService call here 
    } catch (err) {
      console.log(err)
    }
  }

  const { bio } = profileData
  const { genre } = profileData
  const { artist } = profileData
  

  return(
    <>
      {props.user  ? 
        <>
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
            <button type="submit">Add Artist</button>
          </form>
        </>
        :
        <>
          {console.log(props.user)}
          <h1>Other Person's Profile</h1>
        </>
      }
    </>
  )
}

export default EditProfile