import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSearch, showEvent } from '../../services/eventServices'
import Comments from '../../components/Comments/Comments'
import * as profileService from '../../services/profileService'

import './EventDetail.css'

const EventDetail = () => {
  const [currentEvent, setCurrentEvent] = useState()
  let location = useLocation()

  useEffect(() => {
    showEvent(location.state.event)
    .then(currentEvent => setCurrentEvent(currentEvent))
  }, [])
  
  const handleInterestedEvent = (evt) => {
    console.log("location.state.event: ", location.state.event)
    evt.preventDefault()
    try {
      profileService.createEventData(location.state.event)
    } catch (err) {
      console.log(err)
    }
  }

  const handleAttendingEvent = (evt) => {
    console.log("location.state.event: ", location.state.event)
    evt.preventDefault()
    try {
      //api call here
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <>
      <img 
        src={location.state.event.images.find(image => image.height > 110 && image.width > 100).url} alt="concertImage" 
        className='event-detail-images'
      />
      <button onClick={handleInterestedEvent}>
        Interested
      </button>
      <button onClick={handleAttendingEvent}>
        Attending
      </button>
      <h2>{location.state.event.name}</h2>
    {location.state.event.classifications[0].genre.name ? 
      <p>Genre: {location.state.event.classifications[0].genre.name}</p>
      : 
      <p>Genre: no genre found</p>
    }

    {location.state.event._embedded.venues[0].name && location.state.event._embedded.venues[0].city.name && location.state.event._embedded.venues[0].state.stateCode ?
      <div>
        <h6>
          Venue: {location.state.event._embedded.venues[0].name} 
          <span>- {location.state.event._embedded.venues[0].city.name}</span>
          <span>, {location.state.event._embedded.venues[0].state.stateCode}</span>
        </h6>
        </div>
      :
      <p>Venue: no venue details</p>
    }

    {location.state.event._embedded.venues[0].accessibleSeatingDetail ?
      <div>
        <p>Accessible seating: {location.state.event._embedded.venues[0].accessibleSeatingDetail}</p>
      </div>
    : 
    <p>Accessbile seating: no accessible seating data</p>
    }

    {location.state.event.dates.start.localTime && location.state.event.dates.start.localDate ?
      <div>
        <h3>{location.state.event.dates.start.localTime}</h3>
        <h3>{location.state.event.dates.start.localDate}</h3>
      </div>
    :
    <p>no local date and time information</p>
    }

    {location.state.event.url ? 
      <button>
        <a href={location.state.event.url}>Buy Tickets</a>
      </button>
    :
    <p>Cannot buy tickets now</p>
    }

    

    {location.state.event.products ?
      <button>
        <a href={location.state.event.products[0].url}>Parking Info</a>
      </button>
    :
    <p>No parking information available</p>
    }

    {location.state.event.sales.public.startDateTime ?
      <h4>Public Presale: {location.state.event.sales.public.startDateTime}</h4>
    :
    <p>Public Presale: no information available</p>
    } 

    {location.state.event.info && location.state.event._embedded.venues[0].parkingDetail ? 
      <div>
        <h6>Important Venue Information:</h6>
        <p>{location.state.event.info}</p>
        <p>Parking Information: {location.state.event._embedded.venues[0].parkingDetail}</p>
      </div>
    :
    <h6>No venue information available</h6>
    }

    {location.state.event.seatmap ?
      <div>
        <img 
          src={location.state.event.seatmap.staticUrl} 
          alt="seatmap" 
          className='seatmap-image'
          />
      </div>
    :
    <div>
      <h6>No seating map available, please see event link for more details.</h6>
    </div>
    }

    {/* <div>
      <Comments event={location.state.event} id={location.state.event.id} currentEvent={location.state.event.id}/>
    </div> */}
    </>
  )
}

export default EventDetail