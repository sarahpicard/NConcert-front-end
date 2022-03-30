import { useState, useEffect } from "react";
import * as eventService from '../../services/eventServices'

const Event = (props) => {
  const [event,setEvent] = useState([])


  useEffect(() => {
    eventService.getEvent(props.event.eventId)
    .then(eventData => setEvent(eventData))
  }, [event])

  return ( 
    <>
      {console.log(props.event.eventId)}
      <div>
        <h4>{props.event.name}</h4>
        <button>Delete Event</button>
      </div>
    </>
   );
}
 
export default Event;