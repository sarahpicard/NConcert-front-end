

const FriendCard = (props) => {
  return ( 
    <>
      {console.log(props.friend)}
      <h1>{props.friend.name}</h1>
    </>
   );
}
 
export default FriendCard;