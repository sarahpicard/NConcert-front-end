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

  useEffect(() => {
    profileService.showProfile(props.user.profile)
    .then(data => setProfile(data))
  }, [profileData])

  const handleUpdateProfileData = (evt) => {
    setProfileData({...profileData, [evt.target.name]: evt.target.value})
  }

  const handleUpdateBio = (evt) => {
    console.log("update bio")
  }

  const handleAddGenre = (evt) => {
    console.log("add genre")
  }

  const handleAddArtist = (evt) => {
    console.log("add artist")
  }

  const handleUpdateSpotify = (evt) => {
    console.log("update spotify")
  }

    const { bio } = profileData
  const { genre } = profileData
  const { artist } = profileData
  const { spotify } = profileData

  return(
    <>
      <h4>Make Profile Updates:</h4>
      <form onSubmit={handleUpdateBio}>
        <label>Bio:
          <input type="text" value={bio} name="bio" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <button type="submit">Update Profile</button>
      </form>
      <form onSubmit={handleAddGenre}>
        <label>Add a Genre:
          <input type="text" value={genre} name="genre" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <button type="submit">Add Genre</button>
      </form>
      <form onSubmit={handleAddArtist}>
        <label>Add an Artist:
          <input type="text" value={artist} name="artist" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <button type="submit">Add Artist</button>
      </form>
      <form onSubmit={handleAddArtist}>
        <label>New Spotify Playlist:
          <input type="text" value={artist} name="artist" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <button type="submit">Update Playlist</button>
      </form>
      <div>
      <>
        <h2>My Favorite Genres:</h2>
        {profile?.genre.map(genre => 
          <Genre genre={genre} handleDeleteGenre={props.handleDeleteGenre}/>
        )}
      </>
      </div>
      <div>
      <>
        <h2>My Favorite Artists:</h2>
        {profile?.artist.map(artist => 
          <Artist artist={artist} handleDeleteArtist={props.handleDeleteArtist}/>
        )}
      </>
      </div>
    </>
  )
}

export default EditProfile