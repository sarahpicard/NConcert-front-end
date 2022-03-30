import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import * as profileService from '../../services/profileService'
import Event from "../../components/Event/Event"
import * as eventService from '../../services/eventServices'

const MyEvents = (props) => {
  const [profile, setProfile] = useState()
  const [event,setEvent] = useState([])
  let location = useLocation()


  useEffect(() => {
    profileService.showProfile(props.user.profile)
    .then(data => {
      setProfile(data)
    })
  }, [])

  // useEffect(() => {
  //   console.log(profile)
  //   eventService.getEvent(props.event.eventId)
  //   .then(eventData => setEvent(eventData))
  // }, [event])

  return (
  <>
    {/* {console.log(profile?.events.attending)} */}
    <h1>My Events</h1>
    <div>
      <h2>Interested Events!</h2>
        {profile?.events?.map(event => {
          return event?.attending === false && event?.interested === true ?
          // console.log("interested: ", event.attending)
            <Event event={event} key={event._id}/>
            :
            <></>
          } 
          )}
    </div>
    <br />
    <div>
      <h2>Attending Events!</h2>
        {profile?.events?.map(event => {
          return event?.attending === true && event?.interested === true ?
            // console.log("attending: ", event.interested )
            <Event event={event} key={event._id}/>
          // console.log("event.attending: ", event.attending)
            :
            <></>
          } 
          )}
    </div>
  </>
  )
}

export default MyEvents