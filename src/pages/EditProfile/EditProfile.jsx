import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import Artist from '../../components/Artist/Artist'
import Genre from '../../components/Genre/Genre'
import { Link } from 'react-router-dom'

import './EditProfile.css'

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
  }, [])

  console.log(profile)
  const handleUpdateProfileData = (evt) => {
    setProfileData({...profileData, [evt.target.name]: evt.target.value})
  }

  const handleAddGenre = async (evt) => {
    console.log("add genre: ", profileData.genre)
    evt.preventDefault()
    try {
      const data = await profileService.addGenre(profileData.genre)
      setProfile(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteArtist = async (artistId) => {
    console.log(artistId)
    try {
      const data = await profileService.deleteArtist(artistId)
      console.log("response data", data)
      setProfile(data)
    } catch (err) {
      console.log(err)
    } 
  }

  const handleDeleteGenre = async (genreId) => {
    console.log(genreId)
    try {
      const data = await profileService.deleteGenre(genreId)
      console.log("response data", data)
      setProfile(data)
    } catch (err) {
      console.log(err)
    } 
  }

  const handleAddArtist = async (evt) => {
    console.log("add artist: ", profileData.artist)
    evt.preventDefault()
    try {
      const data = await profileService.addArtist(profileData.artist)
      setProfile(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdateBio = async (evt) => {
    console.log("update bio: ", profileData.bio)
    evt.preventDefault()
    try {
      const data = await profileService.updateBio(profileData.bio)
      setProfile(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdateSpotify = async (evt) => {
    console.log("update spotify: ", profileData.spotify)
    evt.preventDefault()
    try {
      const data = await profileService.updateSpotify(profileData.spotify)
      setProfile(data)
    } catch (err) {
      console.log(err)
    }
  }

  const { bio } = profileData
  const { genre } = profileData
  const { artist } = profileData
  const { spotify } = profileData

  return(
    <div className='whole-edit-profile-page'>
      <h4>Make Profile Updates:</h4>
      <form className='edit-profile-label' onSubmit={handleUpdateBio}>
        <label>Bio:
          <input className='editprofile-input' type="text" value={bio} name="bio" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <button className='btn btn-success btn-sm' type="submit">Update Profile</button>
      </form>
      <form className='edit-profile-label' onSubmit={handleAddGenre}>
        <label>Add a Genre:
          <input className='editprofile-input' type="text" value={genre} name="genre" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <button className='btn btn-success btn-sm' type="submit">Add Genre</button>
      </form>
      <form className='edit-profile-label' onSubmit={handleAddArtist}>
        <label>Add an Artist:
          <input className='editprofile-input' type="text" value={artist} name="artist" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <button className='btn btn-success btn-sm' type="submit">Add Artist</button>
      </form>
      <form className='edit-profile-label' onSubmit={handleUpdateSpotify}>
        <label>New Spotify Playlist:
          <input className='editprofile-input' type="text" value={spotify} name="spotify" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <button className='btn btn-success btn-sm' type="submit">Update Playlist</button>
      </form>
      <br/>
      <div>
        <h2>Bio:</h2>
        <p>{profile?.bio}</p>
      </div>
      <div className='update-profile-divs'>
        <h2>My Favorite Genres:</h2>
        {profile?.genre.map(genre => 
          <Genre genre={genre} handleDeleteGenre={handleDeleteGenre}/>
        )}
      </div>
      <div className='update-profile-divs'>
        <h2>My Favorite Artists:</h2>
        {profile?.artist.map(artist => 
          <Artist artist={artist} handleDeleteArtist={handleDeleteArtist}/>
        )}
      </div>
      <div className='update-profile-divs'>
        <h2>My Spotify Playlist</h2>
          <Link to={`/`}>Spotify</Link>
      </div>
    </div>
  )
}

export default EditProfile