

const Artist = (props) => {
  return ( 
    <div>
      <p>{props.artist.artist}</p>
      <button type="submit">Delete Genre</button>
    </div>
   );
}
 
export default Artist;