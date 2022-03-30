import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { showProfile } from "../../services/profileService"
import { useState, useEffect } from "react";

const Friend = (props) => {
  const [friend, setFriend] = useState()



  console.log(friend)

  useEffect(() => {
    showProfile(props.friendsProfileId)
    .then(profileData => setFriend(profileData))
  }, [])


//   <>
//   <h1>hello</h1>
//   <h1>Profile</h1>
//   <div>
//     <p>Bio: {location.state.profile?.bio}</p>
//     <p>Favorite Artists: {location.state.profile?.artist?.map(artist => 
//        <>{artist.artist}</>
//       )}
//     </p>
//     <p>Favorite Genres: {location.state.profile?.genre?.map(genre => 
//       <>{genre.genre}</>
//       )}
//     </p>
//     <p>Spotify: <a href={location.state.profile?.spotify}>{location.state.profile?.name}'s Playlist</a></p>
//     <button onClick={handleAddFriend}>Add Friend</button>
//     <p>(Note: this will allow {location.state.profile?.name} to see the events you are interested in and attending)</p>
//   </div>
// </>

  return ( 
    <>
      <h1>hello</h1>
      {/* {console.log(props.friend)}
      <h2>{props.friend?.name}</h2>
      <Link to={`/profile/${props.friend?.profileId}`} state={props.friend}>
        link to profile
      </Link>
      <button type="submit" onClick={() => props.handleDeleteFriend(props.friend?._id)}>Unfriend: </button> */}


    </>
   );
}
 
export {
  Friend,
}