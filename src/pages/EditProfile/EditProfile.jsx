import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import Artist from '../../components/Artist/Artist'
import Genre from '../../components/Genre/Genre'
import { Link } from 'react-router-dom'

const EditProfile = (props) => {
  const [profile, setProfile] = useState()
  const [profileData, setProfileData] = useState({
    genre: '',
    artist: '',
    bio: '',
    spotify: '',
  })
  const [genreState, setGenreState] = useState([])
  const [artistState, setArtistState] = useState([])
  const [bioState, setBioState] = useState([])
  const [spotifyState, setSpotifyState] = useState([])
  
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
      console.log("data: ", data)
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
      <form onSubmit={handleUpdateSpotify}>
        <label>New Spotify Playlist:
          <input type="text" value={spotify} name="spotify" autoComplete="off" onChange={handleUpdateProfileData}/>
        </label>
        <button type="submit">Update Playlist</button>
      </form>
      <br/>
      <div>
        <h2>Bio:</h2>
        <p>{profile?.bio}</p>
      </div>
      <div>
        <h2>My Favorite Genres:</h2>
        {profile?.genre.map(genre => 
          <Genre genre={genre} handleDeleteGenre={props.handleDeleteGenre}/>
        )}
      </div>
      <div>
        <h2>My Favorite Artists:</h2>
        {profile?.artist.map(artist => 
          <Artist artist={artist} handleDeleteArtist={props.handleDeleteArtist}/>
        )}
      </div>
      <div>
        <h2>My Spotify Playlist</h2>
          <Link to={`/`}>Spotify</Link>
      </div>
    </>
  )
}

export default EditProfile