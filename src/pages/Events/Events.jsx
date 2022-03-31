import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices.js'
import EventDetails from "../../components/EventDetails/EventDetails.jsx"
import Search from "../Search/Search.jsx"

import './Events.css'

const Events = (props) => {
  return (
    <div className="whole-events-page-div">
      <Search events={props.events}/>
    </div>
  )
}

export default Events