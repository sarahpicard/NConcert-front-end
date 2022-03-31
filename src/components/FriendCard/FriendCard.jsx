import { Link } from "react-router-dom";

const FriendCard = (props) => {
  return ( 
    <>
      <div>
      <h3>{props.friend.name}</h3>
      <h6>{props.friend.bio}</h6>
      <Link to={`/profile/${props.friend.profileId}`} state={props.friend.profileId}>Check Out Their Events!</Link>
      </div>
    </>
   );
}
 
export default FriendCard;