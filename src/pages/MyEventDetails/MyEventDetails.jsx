import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices'
import { useLocation } from "react-router-dom"


const MyEventDetails = (props) => {
  const [event,setEvent] = useState([])
  let location = useLocation()


  useEffect(() => {
    console.log(location.state.eventId)
    eventService.getEvent(location.state.eventId)
    .then(eventData => setEvent(eventData))
  }, [location.state.eventId])

  return ( 
    <>
      <h1>My Event Details Here</h1>
    </>
   );
}
 
export default MyEventDetails;