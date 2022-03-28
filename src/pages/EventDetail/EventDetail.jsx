import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSearch, showEvent } from '../../services/eventServices'


const EventDetail = () => {
  const [currentEvent, setCurrentEvent] = useState()
  let location = useLocation()

  useEffect(() => {
    showEvent(location.state.event)
    .then(currentEvent => setCurrentEvent(currentEvent))
  }, [])
  // console.log(location.state.event)
  


  return(
    <>
    <img src={location.state.event.images.find(image => image.height > 110 && image.width > 100).url} alt="concertImage" />
    <h2>{location.state.event.name}</h2>
    <p>Genre: {location.state.event.classifications[0].genre.name}</p>
    <div>
      <h6>
        Venue: {location.state.event._embedded.venues[0].name} 
        <span>- {location.state.event._embedded.venues[0].city.name}</span>
        <span>, {location.state.event._embedded.venues[0].state.stateCode}</span>
      </h6>
      <p>Accessible seating: {location.state.event._embedded.venues[0].accessibleSeatingDetail}</p>
    </div>
    <div>
      <h3>{location.state.event.dates.start.localTime}</h3>
      <h3>{location.state.event.dates.start.localDate}</h3>
    </div>
    <button>
      <a href={location.state.event.url}>Buy Tickets</a>
    </button>
    <button>
      <a href={location.state.event.products[0].url}>Parking Info</a>
    </button>
    <h4>Public Presale: {location.state.event.sales.public.startDateTime}</h4>
    <div>
      <h6>Important Venue Information:</h6>
      <p>{location.state.event.info}</p>
      <p>Parking Information: {location.state.event._embedded.venues[0].parkingDetail}</p>
    </div>
    <div>
      <img src={location.state.event.seatmap.staticUrl} alt="seatmap" style={{height: '300px' }} />
    </div>

      {/* <h2>{props.events[0]._embedded.venues[0].name}</h2>
      <h2>{props.events[0].dates.start.localDate}</h2>
      <h2>{props.events[0].dates.start.localTime}</h2>
      <a href={`${props.events[0].url}`}>Buy Tickets</a>
      <div>
        <img src={props.events[0].images[0].url} alt="" />
      </div>
      <h4>Accessibility Information: {props.events[0]._embedded.venues[0].accessibleSeatingDetail}</h4>
      <h4>Additional Information: {props.events[0].info}</h4> */}
    </>
  )
}

export default EventDetail