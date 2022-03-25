// import * as eventService from "./services/eventServices"
import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices.js'

const Events = () => {
  const [events, setEvents] = useState([])
  const [links, setLinks] = useState([])

  // const handleGetEvents = async () => {
  //   // console.log("hit")
  //   const allEvents = await getAllEvents()
  //   setEvents(allEvents)
  // }

  useEffect(() => {
    eventService.getAllEvents()
    .then(allEvents => setEvents(allEvents))
  }, [])

  return (
    <>
      <h1>Events Page</h1>
      <button>See events</button>
      <p>{console.log("events: ", events)}</p>
    </>
  )
}

export default Events