import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as eventService from '../../services/eventServices'


const Event = (props) => {

  return ( 
    <>
      <div>
        <h4>{props.event.name}</h4>
        <p><a href={`${props.event.url}`}>Buy Tickets</a></p>
        <p>{props.event.venue}</p>
        <p>{props.event.date}</p>
        <p>{props.event.time}</p>
        <p>{props.event.city}, {props.event.state}</p>
        <Link to={`/myevents/${props.event.eventId}`} state={props.event}>See Event</Link>
        <button>Delete Event</button>
      </div>
    </>
   );
}
 
export default Event;