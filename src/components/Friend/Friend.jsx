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
    <>
      <div className="container whole-friend-component">
        <article className="postcard card-body whole-postcard-body">
          <img className="friend-component-avatar postcard_img" src="https://i.imgur.com/Y5qHYjd.png" alt="Avatar" />
          <div className="friend-component-info">
            <h1 className="">{friend?.name}</h1><br />
            <div className="">
              <h6 className="friend-component-header card-text"><span>Bio:</span> {friend?.bio}</h6>
            </div><br />
            <div className="">
              <div>
                {friend?.genre ?
                  <div>
                    <h6 className="friend-component-header">Favorite Genres:</h6>
                    {friend?.genre?.map(genre =>
                      <h6 className="btn btn-success btn-genre-artist">{genre.genre}</h6>
                    )}
                  </div>
                  :
                  <p>no favorite genres yet</p>
                }
              </div><br />
              <div>
                {friend?.artist ?
                  <div>
                    <h6 className="friend-component-header">Favorite Artists:</h6>
                    {friend?.artist?.map(artist =>
                      <h6 className="btn btn-success btn-genre-artist">{artist.artist}</h6>
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
                    {friend?.friends?.map(otherFriend =>
                      <h6>{otherFriend.name}</h6>
                    )}
                  </div>
                  :
                  <p>no friends yet</p>
                }
              </div>
              <div>
                <button className="unfriend-button btn btn-success" onClick={props.handleAddFriend}>Add Friend</button>
                <button className="unfriend-button btn btn-success" type='submit' onClick={() => props.handleDeleteFriend(friend?._id)}>Unfriend</button>
          </div>
//       </div>
//       </div>
      </article>
    </div>
    </>
  );
}

export {
  Friend,
}
