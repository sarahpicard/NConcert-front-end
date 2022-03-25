// import * as eventService from "./services/eventServices"
import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices.js'

const Events = () => {
  const [events, setEvents] = useState([])
  const [links, setLinks] = useState([])

  useEffect(() => {
    eventService.getAllEvents()
    .then(allEvents => setEvents(allEvents))
  }, [])

  //add links to state
  useEffect(() => {
    eventService.getAllEvents()
    .then(allLinks => setLinks(allLinks))
  }, [])

  return (
    <>
      <h1>Events Page</h1>
      <button>See events</button>
      <p>{console.log("events: ", events)}</p>
      {console.log("links: ", links)}
    </>
  )
}

export default Events