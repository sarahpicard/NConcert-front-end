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
      <div>
        <h6>Bio:</h6>
        <p>{friend?.bio}</p>
      </div>
      <div>
        {friend?.genre ?
        <div>
          <h6>Favorite Genres:</h6>
            {friend?.genre.map(genre => 
              <h6>genre</h6>
            )}
          </div>
        :
        <p>no favorite genres yet</p>
      }
      </div>
      <div>
        <h6>Favorite Artists:</h6>
        {friend?.artist.map(artist =>
          <h6>artist</h6>
          )}
      </div>
      <div>
        <h6>Friends:</h6>
        {friend?.friends.map(otherFriend =>
          <h6>other friend</h6>
          )}
      </div>
      <button type='submit' onClick={() => props.handleDeleteFriend(friend?._id)}>Unfriend</button>
      {/* <button type="submit" onClick={() => props.handleDeleteFriend(props.friend?._id)}>Unfriend: </button> */} 


    </>
   );
}
 
export {
  Friend,
}