import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices.js'
import EventDetails from "../../components/EventDetails/EventDetails.jsx"
import Search from "../Search/Search.jsx"


const Events = (props) => {
  return (
    <>
      <h1>Events Page</h1>
      <Search events={props.events}/>
    </>
  )
}

export default Events