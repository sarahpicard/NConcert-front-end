import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { showProfile } from "../../services/profileService"
import * as profileService from '../../services/profileService'
import { Friend } from "../../components/Friend/Friend"
import { Link, useNavigate } from 'react-router-dom'


const ProfilePage = (props) => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState()
  const [isComplete, setIsComplete] = useState(false)
  let location = useLocation()
  const [profileData, setProfileData] = useState({
    genre: '',
    artist: '',
    bio: '',
    spotify: '',
  })
  
  useEffect(() => {
    showProfile(props.user.profile)
    .then(data => {
      console.log('usEfffect data: ', data)
      setProfile(data)
      data.bio ? setIsComplete(true) : setIsComplete(false)
      console.log("isComplete", isComplete)
    })
  }, [props.user.profile, isComplete])

  const handleAddProfileData = (evt) => {
    setProfileData({...profileData, [evt.target.name]: evt.target.value})
  }

  const onProfileSubmit = (evt) => {
    setProfile({...profile, [evt.target.name]: evt.target.value})
  }

  const submitProfileData = (evt) => {
    console.log("profileData: ", profileData )
    evt.preventDefault()
    try {
      profileService.createProfileData(profileData)
      .then(profileData => {
        console.log("profileData: ", profileData)
        // setProfileData(profileData)
        setProfile(profileData)
        // navigate(`/profile/${props.user.profile}`)
        setIsComplete(true)
        console.log("isComplete submit: ", isComplete)
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddFriend = (evt) => {
    evt.preventDefault()
    try {
      profileService.addFriend(location.state.profile._id, location.state.profile.name, location.state.profile.bio)
    } catch (err) {
      console.log(err)
    }
    onProfileSubmit() 
  }

  const { bio } = profileData
  const { genre } = profileData
  const { artist } = profileData
  const { spotify } = profileData
  
  return (
    <>
    {console.log(profile)}
    {props.user.profile === location.state.profile._id  ? 
      <>
        <h1>My Profile</h1>
          { !isComplete ?
            <>
            {/* //useNavigate to edit page */}
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
                  <button type="submit" onClick={onProfileSubmit}>Add To Profile</button>
                </form>
              </>
            :
              <Link to={`/profile/${props.user.profile}/edit`} state={profile}>
                <p>Update Profile</p>
              </Link>
            } 
          <div className="profile-info">
            <p>Bio: {profile?.bio}</p>
            <p>Favorite Artists: {profile?.artist.map(artist => 
              <>{artist?.artist}<br/></>
              )}
            </p>
            <p>Favorite Genres: {profile?.genre.map(genre => 
              <>{genre?.genre}<br/></>
              )}
            </p>
            <p>Spotify: <a href={profile?.spotify}>My Favorite Playlist</a></p>
          </div>
          <div className="friends">
            {profile?.friends.length ? 
              <>
                <h2>My Friends Here</h2>
                {console.log(profile?.friends)}
                {profile?.friends.map(friend => 
                  <Friend friend={friend} handleDeleteFriend={props.handleDeleteFriend}/>
                )}
              </>
             :
              <>
                <h2>No Friends Yet</h2>
              </>
            }
          </div>
      </>
      :
      <>
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
          <p>Spotify: <a href={location.state.profile.spotify}>{location.state.profile.name}'s Playlist</a></p>
          <button onClick={handleAddFriend}>Add Friend</button>
          <p>(Note: this will allow {location.state.profile.name} to see the events you are interested in and attending)</p>
        </div>
      </>
    }
  </>
  )
}

export default ProfilePage