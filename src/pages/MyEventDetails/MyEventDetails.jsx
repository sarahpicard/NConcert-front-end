import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices'
import { useLocation } from "react-router-dom"
import * as profileService from '../../services/profileService'

import './MyEventDetails.css'

const MyEventDetails = (props) => {
  const [event,setEvent] = useState([])
  let location = useLocation()


  useEffect(() => {
    eventService.getEvent(location.state.eventId)
    .then(eventData => setEvent(eventData))
  }, [location.state.eventId])

  const handleInterestedEvent = (evt) => {
    console.log("location.state.event: ", location.state.eventId)
    evt.preventDefault()
    try {
      profileService.createInterested(location.state.eventId)
    } catch (err) {
      console.log(err)
    }
  }

  const handleAttendingEvent = (evt) => {
    console.log("location.state.event: ", location.state.eventId)
    evt.preventDefault()
    try {
      profileService.createAttending(location.state.eventId)
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <div className="my-event-details-whole-page">
      <h1 className="my-event-details-h1">{props._name}</h1>
      <img 
        src={event[0]?.images?.find(image => image.height > 110 && image.width > 100).url} alt="concertImage" 
        className='event-detail-images'
      />
      <button className="btn btn-success" onClick={handleInterestedEvent} style={{ margin: '5px'}}>
        Interested
      </button>
      <button className="btn btn-success" onClick={handleAttendingEvent}>
        Attending
      </button>
      <button className="btn btn-success" onClick={() => props.handleDeleteEvent(location.state._id)} style={{ margin: '5px'}}>Delete Event</button>
      <h2>{location.state.name}</h2>
      <p>{location.state.venue}</p>
      <p>{location.state.city}, {location.state.state}</p>
      <p>{location.state.date}</p>
      <p>{location.state.time}</p>
      <a href={location.state.url}>Buy Tickets</a>
    </div>
  )
}
 
export default MyEventDetails;