import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as profileService from '../../services/profileService'

const Friend = (props) => {
  let location = useLocation()

  const handleDeleteFriend = (evt) => {
    console.log(props.friend.profileId)
    evt.preventDefault()
    try {
      profileService.deleteFriend(props.friend.profileId)
    } catch (err) {
      console.log(err)
    } 
  }

  return ( 
    <>
      <h2>{props.friend.name}</h2>
      <h4>{props.friend.bio}</h4>
      <Link to={`/profile/${props.friend.profileId}`} state={props.friend}>
        link to profile
      </Link>
      <button type="submit" onClick={handleDeleteFriend}>Unfriend: </button>
    </>
   );
}
 
export {
  Friend,
}