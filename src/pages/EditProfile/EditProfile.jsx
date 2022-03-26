import { useState } from 'react'
// import * as profileService from '../../services/profileService'

const EditProfile = (props) => {
  const [genreData, setGenreData] = useState({
    genre: ''
  })
  const [artistData, setArtistData] = useState({
    artist: ''
  })

  const handleAddGenre = (evt) => {
    setGenreData({...genreData, [evt.target.name]: evt.target.value})
  }

  const submitGenre = async evt => {
    //this code is modeled off Sarahs search functions
    evt.preventDefault()
    try {
      // profileService call here 
    } catch (err) {
      console.log(err)
    }
  }

  // const submitGenre = evt => {
  //   this code is from the puppies with auth example of sending form data and importing to database
  //   evt.preventDefault()
  //   const genreFormData = new FormData()
  //   genreFormData('genre', genreData.genre)
  //   handleAddGenre(genreFormData)
  // }

  const { genre } = handleAddGenre

  const handleAddArtist = (evt) => {
    setArtistData({...artistData, [evt.target.name]: evt.target.value})
  }

  const submitArtist = (evt) => {
    //this code is modeled off Sarahs search functions
    evt.preventDefault()
    try {
      // profileService call here 
    } catch (err) {
      console.log(err)
    }
  }

  const { artist } = handleAddArtist
  
  // const submitArtist = evt => {
  //   evt.preventDefault()
  //   const artistFormData = new FormData()
  //   artistFormData('artist', artistData.artist)
  //   handleAddArtist(artistFormData)
  // }

  const isGenreValid = () => {
    return !(genre)
  }

  const isArtistValid = () => {
    return !(artist)
  }

  return(
    <>
      <h1>Edit Profile</h1>
      <h4>Add your favorite artists and genres!</h4>
      <form onSubmit={submitGenre}>
        <label>Genre:
          <input type="text" value={genre} name="genre" autoComplete="off" onChange={handleAddGenre}/>
        </label>
        <button type="submit" disabled={isGenreValid} >Add Genre</button>
      </form>
      <br />
      <form autoComplete="off" onSubmit={submitArtist}>
        <label>Artist:
          <input type="text" value={artist} name="artist"  onChange={handleAddArtist} />
        </label>
        <button type="submit" disabled={isArtistValid}>Add Artist</button>
      </form>
    </>
  )
}

export default EditProfile