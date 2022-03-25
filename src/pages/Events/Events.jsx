// import * as eventService from "./services/eventServices"
import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices.js'
import EventDetails from "../../components/EventDetails/EventDetails.jsx"

const Events = (props) => {
  return (
    <>
      <h1>Events Page</h1>
      <form action="#">
        <input type="text" placeholder="search event"/>
        <button>Search</button>
      </form>
      {props.events.map((event) => 
        <EventDetails event={event}/>
      )}
      <button>Next Page</button>
    </>
  )
}

export default Events