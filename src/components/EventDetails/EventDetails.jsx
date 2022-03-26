import Events from "../../pages/Events/Events";
import { Link } from "react-router-dom";

import './EventDetails.css'

const eventDetails = (props) => {
  return ( 
    <>
    <h2>{props.event.name}</h2>
    <Link to={`/events/${props.event.id}`} element={props.event} state={{props}}>
      <button>Event Detail</button>
    </Link>
    <p>
      {props.event.dates.start.localDate}, 
      {props.event.dates.start.localTime}
    </p>
    <p>
      Venue: {props.event._embedded.venues[0].name}
    </p>
    <p>
      {props.event._embedded.venues[0].city.name}, 
      {props.event._embedded.venues[0].state.stateCode}
    </p>
    <div>
      <img src={props.event.images[0].url} alt="event" />
    </div>
    </>
  );
}

export default eventDetails;