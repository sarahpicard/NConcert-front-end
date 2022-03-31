import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as profileService from '../../services/profileService'


const Event = (props) => {
  // const [profile, setProfile] = useState()
  
  // useEffect(() => {
  //   profileService.showProfile(props.user.profile)
  //   .then(data => {
  //     console.log("useEffect data: ", data)
  //     setProfile(data)
  //   })
  // }, [profile?.events?.length])



  return ( 
    <>
      {console.log("profile: ", props.profile)}
      <div>
        <h4>{props.event.name}</h4>
        <p><a href={`${props.event.url}`}>Buy Tickets</a></p>
        <p>{props.event.venue}</p>
        <p>{props.event.date}</p>
        <p>{props.event.time}</p>
        <p>{props.event.city}, {props.event.state}</p>
        <Link to={`/myevents/${props.event.eventId}`} state={props.event}>See Event</Link>
        <button className="btn btn-success btn-sm" onClick={() => props.handleDeleteEvent(props.event._id)} style={{ margin: '6px'}}>Delete Event</button>
      </div>
    </>
   );
}
 
export default Event;