import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { showProfile } from "../../services/profileService"
import { useState, useEffect } from "react";

import './Friend.css'

const Friend = (props) => {
  const [friend, setFriend] = useState()

  useEffect(() => {
    showProfile(props.friendsProfileId)
      .then(profileData => setFriend(profileData))
  }, [])

  const isFriend = props.profile?.friends?.some(currentId => currentId?.profileId === friend?._id)
  
  return (
    <> 
      <div className="container whole-friend-component">
        <article className="postcard card-body whole-postcard-body">
          <img className="friend-component-avatar postcard_img" src="https://i.imgur.com/Y5qHYjd.png" alt="Avatar" />
          <div className="friend-component-info">
            <h1 className="">{friend?.name}</h1><br />
            <div className="">
              <h6 className="friend-component-header card-text"><span>Bio: </span> {friend?.bio}</h6>
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
                {isFriend ? 
                  <button className="unfriend-button btn btn-success" type='submit' onClick={() => props.handleDeleteFriend(friend?._id)}>Unfriend</button>
                  :
                  <button className="unfriend-button btn btn-success" onClick={props.handleAddFriend}>Add Friend</button>
                }
              </div>
              <div>
              {isFriend ? 
                <>
                <h2>Friend Events Here</h2>
                {friend?.events?.map(event =>
                      <h6 className="btn btn-success btn-genre-artist">{event?.name}</h6>
                    )}
                </>
                :
                  <></>
                }
                {/* <h2>Friend Events Here</h2>
                {friend?.events?.map(event =>
                      <h6 className="btn btn-success btn-genre-artist">{event.name}</h6>
                    )} */}
              </div>
         </div>
       </div>
      </article>
    </div>
    </>
  );
}

export {
  Friend,
}
