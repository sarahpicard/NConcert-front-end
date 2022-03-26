// import * as eventService from "./services/eventServices"
import { useState, useEffect } from "react"
import * as eventService from '../../services/eventServices.js'
import EventDetails from "../../components/EventDetails/EventDetails.jsx"
import Search from "../Search/Search.jsx"

const Events = (props) => {
  // const [search, setSearch] = useState({ query: '' })
  // const [searchResults, setSearchResults] = useState([])

  // useEffect(() => {
  //   const results = searchData
  // }, [search])
  // searchData is coming from Search.jsx (page) similar to line 9 in animal-crossing-api FossilList.jsx
  // don't think searchData is the right variable - need to replace it with something

  return (
    <>
      <h1>Events Page</h1>
      <Search />
      {/* <form action="#">
        <input type="text" placeholder="search event"/>
        <button>Search</button>
      </form> */}
      {props.events.map((event) =>
        <EventDetails event={event} />
      )}
      <button>Next Page</button>
    </>
  )
}

export default Events