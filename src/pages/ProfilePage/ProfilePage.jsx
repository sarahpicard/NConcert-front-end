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
    spotify: ''
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

  const handleAddFriend = (evt) => {
    evt.preventDefault()
    try {
      profileService.addFriend(location.state.profile._id, location.state.profile.name, location.state.profile.bio, location.profile.state.spotify)
    } catch (err) {
      console.log(err)
    } 
  }

  const { bio } = profileData
  const { genre } = profileData
  const { artist } = profileData
  const { spotify } = profileData
  

  return (
    <>
    {console.log(profileData)}
    {props.user.profile === location.state.profile._id  ? 
      <>
        <h1>My Profile</h1>
          { location.state.profile.bio === undefined?
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
                  <label>Spotify Playlist:
                    <input type="text" value={spotify} name="spotify"  onChange={handleAddProfileData} />
                  </label>
                  <button type="submit">Update Profile</button>
                </form>
              </>
            :
              <p>Update Profile</p>
            } 
          <div>
            <p>Bio: {location.state.profile.bio}</p>
            <p>Favorite Artists: {location.state.profile.artist.map(artist => 
              <>{artist.artist}<br/></>
              )}
            </p>
            <p>Favorite Genres: {location.state.profile.genre.map(genre => 
              <>{genre.genre}<br/></>
              )}
            </p>
            <p>Spotify: <a href={location.state.profile.spotify}>My Favorite Playlist</a></p>
          </div>
      </>
      :
      <>
        {/* {console.log("userId: ", props.user)}
        {console.log("profile: ", location.state.profile)} */}
        <h1>{location.state.profile.name}'s Profile</h1>
        <div>
          <p>Bio: {location.state.profile.bio}</p>
          <p>Favorite Artists: {location.state.profile.artist.map(artist => 
             <>{artist.artist}</>
            )}
          </p>
          <p>Favorite Genres: {location.state.profile.genre.map(genre => 
            <>{genre.genre}</>
            )}
          </p>
          <button onClick={handleAddFriend}>Add Friend</button>
          <p>(Note: this will allow {location.state.profile.name} to see the events you are interested in and attending)</p>
        </div>
      </>
    }
  </>
  )
}

export default ProfilePage