

const Artist = (props) => {
  return ( 
    <div>
      <p>{props.artist.artist}</p>
      <button className="btn btn-success btn-sm" type="submit" onClick={() => props.handleDeleteArtist(props.artist._id)}>Delete Artist</button>
    </div>
   );
}
 
export default Artist;