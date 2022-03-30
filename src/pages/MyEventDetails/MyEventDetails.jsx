import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices'


const MyEventDetails = (props) => {
  const [event,setEvent] = useState([])


  useEffect(() => {
    eventService.getEvent(props.event.eventId)
    .then(eventData => setEvent(eventData))
  }, [props.event.eventId])

  return ( 
    <>
      <h1>My Event Details Here</h1>
    </>
   );
}
 
export default MyEventDetails;