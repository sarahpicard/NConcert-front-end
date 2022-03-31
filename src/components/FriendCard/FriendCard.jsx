import { Link } from "react-router-dom";

const FriendCard = (props) => {
  return ( 
    <>
      {console.log(props.friend)}
      <h1>{props.friend.name}</h1>
      <Link to={`/profile/${props.friend.profileId}`} state={props.friend.profileId}>See Profile</Link>
    </>
   );
}
 
export default FriendCard;