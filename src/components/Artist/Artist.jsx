

const Artist = (props) => {
  return ( 
    <div>
      <p>{props.artist.artist}</p>
      <button type="submit" onClick={() => props.handleDeleteArtist(props.artist._id)}>Delete Artist</button>
    </div>
   );
}
 
export default Artist;