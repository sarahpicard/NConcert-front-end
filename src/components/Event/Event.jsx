import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as profileService from '../../services/profileService'


const Event = (props) => {

  
  const handleDeleteEvent = (eventId) => {
    console.log(props.event._id)
    try {
      profileService.deleteEvent(props.event._id)
    } catch (err) {
      console.log(err)
    } 
  }

  return ( 
    <>
      {console.log(props)}
      <div>
        <h4>{props.event.name}</h4>
        <p><a href={`${props.event.url}`}>Buy Tickets</a></p>
        <p>{props.event.venue}</p>
        <p>{props.event.date}</p>
        <p>{props.event.time}</p>
        <p>{props.event.city}, {props.event.state}</p>
        <Link to={`/myevents/${props.event.eventId}`} state={props.event}>See Event</Link>
        <button onClick={() => handleDeleteEvent(props.event._id)}>Delete Event</button>
      </div>
    </>
   );
}
 
export default Event;