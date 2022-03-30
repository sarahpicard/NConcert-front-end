import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices.js'
import EventDetails from "../../components/EventDetails/EventDetails.jsx"
import Search from "../Search/Search.jsx"


const Events = (props) => {
  return (
    <div>
      <Search events={props.events}/>
    </div>
  )
}

export default Events