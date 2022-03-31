import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { showProfile } from "../../services/profileService"
import * as profileService from '../../services/profileService'
import { Friend } from "../../components/Friend/Friend"
import { Link } from 'react-router-dom'
import FriendCard from "../../components/FriendCard/FriendCard"

import './ProfilePage.css'

const ProfilePage = (props) => {
  const [profile, setProfile] = useState({})
  const [friends, setFriends] = useState([])
  const [isComplete, setIsComplete] = useState(false)
  let location = useLocation()
  const [profileData, setProfileData] = useState({
    genre: '',
    artist: '',
    bio: '',
    spotify: '',
  })


  const friendsProfileId = location.state?.profile 
  ? location.state?.profile?._id
  : location.state

  
  useEffect(() => {
    profileService.showProfile(props.user.profile)
    .then(data => {
      setProfile(data)
      setFriends(data.friends)
      data.bio ? setIsComplete(true) : setIsComplete(false)
    })
  }, [props.user.profile, isComplete])

  const handleAddProfileData = (evt) => {
    setProfileData({...profileData, [evt.target.name]: evt.target.value})
  }

  const onProfileSubmit = (evt) => {
    setProfile({...profile, [evt.target.name]: evt.target.value})
  }

  const submitProfileData = (evt) => {
    evt.preventDefault()
    try {
      profileService.createProfileData(profileData)
      .then(profileData => {
        setProfile(profileData)
        setIsComplete(true)
      })
    } catch (err) {
      console.log(err)
    }
  }

  //use filter method on existing object to find id of item we want to delete

  const handleAddFriend = async (evt) => {
    evt.preventDefault()
    try {
      const data = await profileService.addFriend(location.state.profile._id, location.state.profile.name)
      setProfile(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteFriend = async (friendId) => {
    try {
      const data = await profileService.deleteFriend(friendId)
      console.log('response data: ', data)
      setProfile(data)
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
    {props.user.profile === location.state?.profile || props.user.profile === location.state?.profile?._id ? 
      <div className="whole-profile-pg">
        <h1 className="my-profile-h1">My Profile</h1>
        <hr />
          { !isComplete ?
            <>
            <h1 className="edit-profile-h1">Edit Profile</h1>
              <h4 className="add-artists-genres-h4">Add your favorite artists and genres!</h4>
                <form onSubmit={submitProfileData}>
                  <label>Bio:
                    <input className="profile-pg-input" type="text" value={bio} name="bio" autoComplete="off" onChange={handleAddProfileData}/>
                  </label>
                  <label>Genre:
                    <input className="profile-pg-input" type="text" value={genre} name="genre" autoComplete="off" onChange={handleAddProfileData}/>
                  </label>
                  <label>Artist:
                    <input className="profile-pg-input" type="text" value={artist} name="artist"  onChange={handleAddProfileData} />
                  </label>
                  <label>Spotify Playlist:
                    <input className="profile-pg-input" type="text" value={spotify} name="spotify"  onChange={handleAddProfileData} />
                  </label>
                  <button className="btn btn-success profile-update-btn" type="submit" onClick={onProfileSubmit}>Add To Profile</button>
                </form>
              </>
            :
              <Link to={`/profile/${props.user.profile}/edit`} state={profile}>
                <p>Update Profile</p>
              </Link>
            } 
          <div className="profile-info">
            <p><span className="my-bio-header">Bio:</span> Sarah</p>
            <p><span className="my-bio-header">Favorite Artists:</span>{profile?.artist?.map(artist => 
              <>{artist?.artist}<br/></>
              )}
            </p>
            <p><span className="my-bio-header">Favorite Genres:</span> {profile?.genre?.map(genre => 
              <>{genre?.genre}<br/></>
              )}
            </p>
            <p><span className="my-bio-header">Spotify:</span> <a href={profile?.spotify}>My Favorite Playlist</a></p>
          </div>
          <div className="friends">
            {profile?.friends?.length ? 
              <>
                <h2>My Friends: </h2>
                {profile?.friends?.map(friend => 
                  <FriendCard friend={friend} friendsProfileId={friendsProfileId}handleDeleteFriend={handleDeleteFriend} handleAddFriend={handleAddFriend}/>
                )}
              </>
             :
              <>
                <h2>No Friends Yet</h2>
              </>
            }
          </div>
      </div>
      :
      <Friend user={props.user} profile={profile} handleAddFriend={handleAddFriend} friends={friends} handleDeleteFriend={handleDeleteFriend} friendsProfileId={friendsProfileId}/>
    }
  </>
  )
}

export default ProfilePage