// import * as eventService from "./services/eventServices"
import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices.js'
import EventDetails from "../../components/EventDetails/EventDetails.jsx"

const Events = (props) => {


  return (
    <>
      <h1>Events Page</h1>
      <button>See events</button>
      {props.events.map((event) => 
        <EventDetails event={event}/>
      )}
    </>
  )
}

export default Events