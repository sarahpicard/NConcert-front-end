

const Genre = (props) => {
  return ( 
    <div>
      <p>{props.genre.genre}</p>
      <button type="submit">Delete Genre</button>
    </div>
   );
}
 
export default Genre;