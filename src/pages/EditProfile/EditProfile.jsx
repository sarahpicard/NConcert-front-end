import { useState, useRef } from "react/cjs/react.production.min"
import * as profileService from '../../services/profileService'

const EditProfile = () => {
  // const genreForm = useRef()
  // const [genreData, setGenreData] = useState({
  //   genre: ''
  // })
  // const artistForm = useRef()
  // const [artistData, setArtistData] = useState({
  //   artist: ''
  // })

  // const handleAddGenre = async newGenreData => {
  //   const newGenre = await profileService.createGenre(newGenreData)
  //   setGenreData([...genreData, newGenre])
  // }

  // const submitGenre = evt => {
  //   evt.preventDefault()
  //   const genreFormData = new FormData()
  //   genreFormData('genre', genreData.genre)
  //   handleAddGenre(genreFormData)
  // }

  // const handleAddArtist = async newArtistData => {
  //   const newArtist = await profileService.createArtist(newArtistData)
  //   setArtistData([...artistData, newArtist])
  // }
  
  // const submitArtist = evt => {
  //   evt.preventDefault()
  //   const artistFormData = new FormData()
  //   artistFormData('artist', artistData.artist)
  //   handleAddArtist(artistFormData)
  // }

  return(
    <>
      <h1>Edit Profile</h1>
      <h4>Add your favorite artists and genres!</h4>
      <form>
      {/* <form autoComplete="off" ref={genreForm} onSubmit={submitGenre}> */}
        <label>Genre:
          <input type="text" name="genre" />
        </label>
        <button type="submit">Add Genre</button>
      </form>
      <br />
      <form>
      {/* <form autoComplete="off" ref={artistForm} onSubmit={submitArtist}> */}
        <label>Artist:
          <input type="text" name="artist" />
        </label>
        <button type="submit">Add Artist</button>
      </form>
    </>
  )
}

export default EditProfile