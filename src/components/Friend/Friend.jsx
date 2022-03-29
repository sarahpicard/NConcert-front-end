import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { showProfile } from "../../services/profileService"
import * as profileService from '../../services/profileService'
import { useState, useEffect } from "react";

const Friend = (props) => {
  const [profile, setProfile] = useState()
  let location = useLocation()

  useEffect(() => {
    showProfile(location.state.profile)
    .then(profileData => setProfile(profileData))
  })

  return ( 
    <>
      <h2>{props.friend.name}</h2>
      <h4>{props.friend.bio}</h4>
      <Link to={`/profile/${props.friend.profileId}`} state={props.friend}>
        link to profile
      </Link>
      <button type="submit" onClick={() => props.handleDeleteFriend(props.friend._id)}>Unfriend: </button>
    </>
   );
}
 
export {
  Friend,
}