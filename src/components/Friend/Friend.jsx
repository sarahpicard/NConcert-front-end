import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { showProfile } from "../../services/profileService"
import { useState, useEffect } from "react";

import './Friend.css'

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
    <div className="whole-friend-component">
      <div className="image-div-friend-component">
        <img className="avatar-friend-component" src="https://i.imgur.com/Y5qHYjd.png" alt="Avatar" />
      </div>
      <div className="whole-bio-component container">
      <h1 className="friend-component-h1">{friend?.name}</h1>
      <div>
        <h6><span className="friend-component-header">Bio:</span> {friend?.bio}</h6>
      </div>
      <div>
        {friend?.genre ?
        <div>
          <h6 className="friend-component-header">Favorite Genres:</h6>
            {friend?.genre.map(genre => 
              <h6>{genre.genre}</h6>
            )}
          </div>
        :
        <p>no favorite genres yet</p>
      }
      </div>
      <div>
        {friend?.artist ?
          <div>
            <h6 className="friend-component-header">Favorite Artists:</h6>
            {friend?.artist.map(artist =>
              <h6>{artist.artist}</h6>
            )}
          </div>
          :
          <p>no favorite artists yet</p>
        }
      </div>
      <div>
        {friend?.friends ? 
          <div>
            <h6 className="friend-component-header">Friends:</h6>
            {friend?.friends.map(otherFriend =>
              <h6>{otherFriend.name}</h6>
              )}
          </div>
          :
          <p>no friends yet</p>
        }
      </div>
      <button className="unfriend-button btn btn-success" type='submit' onClick={() => props.handleDeleteFriend(friend?._id)}>Unfriend</button>
      </div>
      {/* <button type="submit" onClick={() => props.handleDeleteFriend(props.friend?._id)}>Unfriend: </button> */} 


    </div>
   );
}
 
export {
  Friend,
}